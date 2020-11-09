var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJmNzg3NmE0ZjkwNGNmMDIzNGNhMzY2NWFkNTMyZDAzZmE2ZGNiNzY0MTRmNDliYTVhMDNjZmE4NTY2YzVjNzFmOWFmNmZkNTg5ODFjODNkIn0.eyJhdWQiOiIyIiwianRpIjoiMmY3ODc2YTRmOTA0Y2YwMjM0Y2EzNjY1YWQ1MzJkMDNmYTZkY2I3NjQxNGY0OWJhNWEwM2NmYTg1NjZjNWM3MWY5YWY2ZmQ1ODk4MWM4M2QiLCJpYXQiOjE2MDM5NzM3OTYsIm5iZiI6MTYwMzk3Mzc5NiwiZXhwIjoxNjM1NTA5Nzk2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.BPDoP5pyfL9pSIxB_1OTX0A35wfVZzNUUSjJwrcs0llUOQGEIrpLekAS279B9AtcYoe1hw4ONGctuFXZqSBolPh1QPI9HIZQbl0kyffERrppIQBjwIExZsodXo5qQk4B6e5Jt3V9hSp0UgnJH5HQfpbNlxuKjEU5__KdPUEgB14cSu6GSmqyFsG67yLlFhbo6HkHGhY9gsOprWaRKO3xi5Y2FHP-MSoOZ0f3S9Gun0g0FXUXxzA7hYftWLuYu7m6Sal_inX7CQL8X_SXhbOq9ZC2s9aLN7isBbTX3oib49_Y3lv0b-lN1Ux-nYAao1luAmRuXsZu9Ed3hOUqz2S3lpzeNGJTPaOxIZFmDtTx2V_sVMP_eIP3q-nZGW7jXdH2sT6uspPmxKDQFO_Ti5BrMwnG3cPvqoGAEI8un7B6bk0J6cpSbhoPksGfIuxY3zkyexa_z5z8MCdcPcKv1NFO15t7GdQTrBSJ5BjYbYcjmO0AVAA-w3O8dOUV-JK_dBtu5sD6u46kN5qz1_3tjIPOQuFw33t3CA8uvmxF1cnxn0yDqyPupRBHlq7d4GA5f2i670UQWuFfd8BIupPIDonT6ORIJRM1YhKZq9Lfp-_rED5_17kbqiwH0lI2Gzz-KS_PXPeDtWjkuzyjFNXPfyX7GdeROOIHmsuIPpLQFx5wJ90");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("digital-signage.devwepro.com/api/v1/monitors", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));



var requestOptions2 = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("digital-signage.devewepro.com/api/v1/monitors/sequence?sequence_id=21", requestOptions2)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));