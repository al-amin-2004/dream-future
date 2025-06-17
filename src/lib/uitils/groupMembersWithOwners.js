export const groupMembersWithOwners = (members) => {
    const uidMap = new Map();


    for (const member of members) {
      if (member.uid) {
        uidMap.set(member.uid, { ...member, onother: [] });
      }
    }

    const results = [];

    for (const member of members) {
      if (member.owner) {
        const owner = uidMap.get(member.owner);
        if (owner) {
          owner.onother.push(member);
        } else {
          results.push(member);
        }
      } else if (uidMap.has(member.uid)) {
        results.push(uidMap.get(member.uid)); 
      } else {
        results.push(member);
      }
    }

    return results;
  }

