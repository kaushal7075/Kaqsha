"use client";
import { useState } from "react";

import { createClient } from "@/utils/supabase/client";

export default function RegistrationForm({ user }) {
  const [parentApproved, setParentApproved] = useState(false);

  const handleParentApproval = async () => {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("user_secondary_details")
        .update({ parent_approved: !parentApproved })
        .eq("user_id", user.id);
      if (error) throw error;
      setParentApproved(!parentApproved);
    } catch (error) {
      console.error("Error updating parent approval:", error.message);
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={parentApproved}
          onChange={handleParentApproval}
        />
        Parent Approval
      </label>
    </div>
  );
}
