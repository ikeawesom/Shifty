import React, { useState } from "react";
import SecondaryButton from "../../utils/SecondaryButton";
import SpinnerRed from "../../utils/graphics/SpinnerRed";
import { deleteMember } from "@/src/libs/prisma/fetchMemberData";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function DeleteMemberButton({ member }: { member: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setLoading(true);
    try {
      const { error } = await deleteMember(member);
      if (error) throw new Error(error);
      router.refresh();
      router.replace(`/dashboard/members`);
    } catch (error: any) {
      toast.error(error.message);
    }
    setLoading(false);
  };
  return (
    <SecondaryButton
      onClick={handleDelete}
      disabled={loading}
      className="text-sm bg-red-50 border-red-400 text-red-400 flex items-center justify-center gap-1"
    >
      Delete Member {loading && <SpinnerRed size={20} />}
    </SecondaryButton>
  );
}
