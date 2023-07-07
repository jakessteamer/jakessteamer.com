// const fetchT = async () => {
//   try {
//     const res = await fetch(
//       'https://app.housecallpro.com/alpha/organizations/99a699f2-c01d-4a40-9690-d49c6b8eea83/rating',
//     );
//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }
//     const data = await res.json();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// };

// fetchT();

async function t() {
  try {
    const res = await fetch(
      'https://app.housecallpro.com/alpha/organizations/99a699f2-c01d-4a40-9690-d49c6b8eea83/rating',
    );
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}
