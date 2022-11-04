export default function getDate(){
  const myDate = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const today = myDate.toLocaleDateString('en-GB', options);

  return today;
}