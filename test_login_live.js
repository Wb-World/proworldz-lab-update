async function test() {
  console.log('Sending login POST to live site...');
  try {
    const res = await fetch('https://proworldz-lab-update.vercel.app/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'mohamedhathim628@gmail.com',
        password: 'mohamed@123'
      })
    });
    console.log('Status Code:', res.status);
    console.log('Status Text:', res.statusText);
    const body = await res.json();
    console.log('Response Body:', body);
  } catch (err) {
    console.error('Test failed with error:', err);
  }
}
test();
