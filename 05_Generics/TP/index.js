class HaloGeneric {
  SapaUser(user) {
    console.log(`Halo user ${user}`);
  }
}

function main() {
  const halo = new HaloGeneric();

  const namaPanggilan = "Naufal";
  halo.SapaUser(namaPanggilan);
}

main();
