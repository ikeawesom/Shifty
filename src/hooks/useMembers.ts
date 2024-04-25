import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { MemberType } from "../constants";
import { fetchUserMembers } from "../libs/prisma/fetchUserData";

export function useMembers() {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const { user } = useKindeBrowserClient();

  const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);
  const [members, setMembers] = useState<MemberType[]>();

  const fetchMembers = async (auth_id: string) => {
    try {
      setLoading(true);
      let { data, error } = await fetchUserMembers(auth_id);
      if (error) throw new Error(error);

      if (query !== "") {
        // handle query
        data = data.filter((member: MemberType) => {
          const full_name = `${member.first_name} ${member.last_name}`;
          return full_name.toLowerCase().includes(query.toLowerCase());
        });
      }
      setMembers(data);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user === null) return;

    setTimeout(() => {
      const { id: auth_id } = user;
      fetchMembers(auth_id);
    }, 400);
  }, [query, user]);

  return { loading, members, query, onQueryChange };
}
