export function convertToInitials(title) {
    const words = title.split(' '); // Split the title into words
    const firstTwoWords = words.slice(0, 2); // Get the first two words
    return firstTwoWords
      .map((word) => word[0].toUpperCase()) // Get the first letter of each word and convert to uppercase
      .join(''); // Join the letters to form the initials
  }

export function formatDate(dateString) {
    const date = new Date(dateString);
    
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear().toString().slice(-2);
  
    return `${day} ${month} ${year}`;
  }

export function formatTime(dateString) {
    const date = new Date(dateString);
    
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedTime = `${hours}:${minutes} ${ampm}`;
    
    return formattedTime;
  }