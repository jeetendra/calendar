import { Calendar } from "@js/component";

function App() {
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    console.log("Selected Date:", date);
  };
  return (
    <>
      <Calendar onDateSelect={handleDateSelect}></Calendar>
    </>
  );
}

export default App;
