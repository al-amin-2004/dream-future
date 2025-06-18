export const groupMembersWithOwners = (members) => {
  const uidMap = new Map();

  // Step 1: মূল UID map তৈরি
  for (const member of members) {
    if (member.uid) {
      uidMap.set(member.uid, { ...member, another: [] });
    }
  }

  const results = [];

  // Step 2: ownership check ও another বানানো
  for (const member of members) {
    if (member.owner) {
      const owner = uidMap.get(member.owner);
      if (owner) {
        const newUid = `${owner.uid}-${owner.another.length + 1}`;
        const newMember = {
          ...member,
          uid: newUid, // generate new uid
          // parentUid: owner.uid, // optional: reference to main account
          // isSubAccount: true,
        };
        owner.another.push(newMember);
      } else {
        results.push(member); // fallback: owner not found
      }
    } else if (uidMap.has(member.uid)) {
      results.push(uidMap.get(member.uid));
    } else {
      results.push(member); // fallback: no uid
    }
  }

  return results;
};
