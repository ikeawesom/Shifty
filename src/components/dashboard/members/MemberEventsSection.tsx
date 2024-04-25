import { EventType } from "@/src/constants";
import React, { useEffect, useState } from "react";
import DefaultSkeleton from "../../utils/DefaultSkeleton";
import { getEventsMembers } from "@/src/libs/prisma/fetchMemberData";
import CenterContainer from "../../CenterContainer";
import GraphicsEmpty from "../../utils/graphics/Empty";
import Points from "../../utils/graphics/Points";

export default function MemberEventsSection({ member }: { member: string }) {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<EventType[]>();

  const handleEvents = async () => {
    setLoading(true);
    try {
      const { data, error } = await getEventsMembers(member);
      if (error) throw new Error(error);
      setEvents(data);
    } catch (error: any) {
      console.log(error.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (member !== "") handleEvents();
  }, []);

  if (loading) return <DefaultSkeleton className="min-h-[25vh]" />;

  if (events === undefined) return;

  if (events.length === 0)
    return (
      <CenterContainer className="w-full p-2 bg-blue-100/80 rounded-md">
        <GraphicsEmpty type="empty" size={100} className="p-3">
          This member has yet to participate in any events.
        </GraphicsEmpty>
      </CenterContainer>
    );

  return (
    <table>
      <tbody>
        <tr className="header">
          <th>Event</th>
          <th>Type</th>
          <th>Created On</th>
        </tr>
        {events.map((event: EventType) => {
          const { event_id, createdOn, eventType, event_name } = event;
          if (event_id)
            return (
              <tr
                key={event_id}
                className="bg-white w-full hover:brightness-95 duration-150 font-light text-gray-500"
              >
                <td className="p-3 text-gray-700">{event_name}</td>
                <td className="p-3 text-gray-400">{eventType}</td>
                <td className="p-3 text-gray-400">
                  {createdOn.toISOString().split("T")[0]}
                </td>
              </tr>
            );
        })}
      </tbody>
    </table>
  );
}
