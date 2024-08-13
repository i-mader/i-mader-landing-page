interface TitleComponentProps {
  title: string;
  page: string;
}

const Heading: React.FC<TitleComponentProps> = ({ title, page }) => {
  if (page === "service") {
    // Split the title into parts for styling
    const parts = title.split(" ");

    // Basic validation for the expected format
    if (parts.length !== 4) {
      console.warn("Title format is incorrect.");
    }

    return (
      <h1 className="text-white font-medium text-center font-raleway">
        {parts[0]}&nbsp;
        <span className="text-primary-soft italic">{parts[1]}&nbsp;</span>
        {parts[2]}&nbsp;
        <span className="text-primary-soft italic">{parts[3]}</span>
      </h1>
    );
  }

  if (page === "home") {
    // Example dynamic extraction based on the provided `title`
    // Adjust this logic based on your specific needs
    const parts = title.split(" ");

    // Adjust the slicing logic according to your title structure
    const part1 = parts.slice(0, 2).join(" "); // "Craft and Build"
    const part2 = parts[2]; // "Creative"
    const part3 = parts.slice(3, 5).join(" "); // "Things For Your"
    const part4 = parts[5]; // "Purpose"

    return (
      <h1 className="text-white font-medium text-center font-raleway">
        {part1}&nbsp;
        <span className="text-primary-soft italic">{part2}</span> <br /> {part3}
        &nbsp;
        <span className="text-primary-soft italic">{part4}</span>
      </h1>
    );
  }
};

export default Heading;
