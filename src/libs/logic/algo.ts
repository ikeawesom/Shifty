interface Member {
  member_name: string;
  points: number;
}

interface ScheduledShift {
  day: string;
  date: string;
  member_name: string;
  points: number;
}

function scheduleShifts(
  members: Member[],
  startDate: Date,
  daysRequired: number
): ScheduledShift[] {
  // 1. Initialize data structures
  const dateToShifts: { [date: string]: number[] } = {};
  const scheduledShifts: ScheduledShift[] = [];
  const memberAvailability: { [memberName: string]: number } = {};

  // 2. Create mapping of dates to available shifts
  for (let i = 0; i < daysRequired; i++) {
    const currentDate = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
    const day = currentDate.getDay();
    const points =
      day === 0 || day === 6
        ? 2 // Weekend
        : day === 5
        ? 1.5 // Friday
        : 1; // Weekday

    dateToShifts[currentDate.toISOString().split("T")[0]] = [points];
  }

  // 3. Sort members based on current points
  members.sort((a, b) => a.points - b.points);

  // 4. Initialize member availability
  members.forEach((member) => {
    memberAvailability[member.member_name] = startDate.getTime();
  });

  // 5. Assign shifts to members
  for (const [date, shifts] of Object.entries(dateToShifts)) {
    let shuffledMembers = [...members];
    shuffledMembers = shuffledMembers.filter(
      (member) =>
        memberAvailability[member.member_name] < new Date(date).getTime()
    );

    if (shuffledMembers.length === 0) {
      // Reset availability if all members are unavailable
      members.forEach((member) => {
        memberAvailability[member.member_name] = new Date(date).getTime();
      });
      shuffledMembers = [...members];
    }

    for (const shift of shifts) {
      shuffledMembers.sort((a, b) => a.points - b.points);
      const member = shuffledMembers.shift()!;
      const points = shift;

      scheduledShifts.push({
        day: new Date(date).toDateString().split(" ")[0],
        date,
        member_name: member.member_name,
        points,
      });

      member.points += points;
      memberAvailability[member.member_name] =
        new Date(date).getTime() + 24 * 60 * 60 * 1000;
    }
  }

  return scheduledShifts;
}

let members = [
  { member_name: "A", points: 3 },
  { member_name: "B", points: 2.5 },
  { member_name: "C", points: 1 },
  { member_name: "D", points: 1.5 },
] as Member[];
console.log("initial members:", members);

const res = scheduleShifts(members, new Date(), 30);
console.log("shifts:", res);

res.forEach((item: ScheduledShift) => {
  const { member_name, points } = item;
  if (member_name === "A") {
    members[0].points += points;
  } else if (member_name === "B") {
    members[1].points += points;
  } else if (member_name === "C") {
    members[2].points += points;
  } else if (member_name === "D") {
    members[3].points += points;
  }
});

console.log("new members:", members);
