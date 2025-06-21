import { Calendar, Calendar2 } from "@js/component";

function App() {
  const handleDateSelect = (date: Date) => {
    console.log("Selected Date:", date);
  };
  return (
    <>
      <Calendar2 onDateSelect={handleDateSelect}></Calendar2>
    </>
  );
}

export default App;
