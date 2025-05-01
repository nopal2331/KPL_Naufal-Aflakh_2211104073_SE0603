import fs from 'fs';

class TeamMembers2211104073_NaufalAflakh {
  readJSON() {
    try {
      const data = fs.readFileSync('./jurnal7_2_2211104073.json', 'utf-8');
      const team = JSON.parse(data);

      console.log("Team member list:");
      team.forEach(member => {
        console.log(`${member.nim} ${member.nama} (${member.angkatan} ${member.jenis_kelamin})`);
      });
    } catch (err) {
      console.error("Gagal membaca atau mem-parsing JSON:", err.message);
    }
  }
}

export default TeamMembers2211104073_NaufalAflakh;
