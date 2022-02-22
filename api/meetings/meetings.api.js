import { AllMeetings } from "./meetings.data";

export const getMyMeetingsFromServer = () => {
  //this command should retrive all the meetings relative form the server
  //return axios.get('http://localhost:3000/api/meetings',"GET") //this will return a list of meetings from the server
  console.log("Loading Meetings");

  return AllMeetings; //return an array of what ever you sort by..
};

export const filterBySubject = (meetings, subject) => {
  //meetings is the array, and subject is the filter proprty
  const sortedMeetings = meetings.filter(
    (meeting) => meeting.subject === subject
  );
  return sortedMeetings;
};

export const sortBySubject = (meetings) => {
  const sortedMeetings = {
    Math: [],
    Science: [],
    ComputerScience: [],
    Language: [],
  };

  for (const i = 0; i < meetings.length; i++) {
    switch (meetings[i].subject) {
      case "Math":
        sortedMeetings.Math.push(meetings[i]);
        break;
      case "Science":
        sortedMeetings.Science.push(meetings[i]);
        break;
      case "ComputerScience":
        sortedMeetings.ComputerScience.push(meetings[i]);
        break;
      case "Language":
        sortedMeetings.Language.push(meetings[i]);
    }
  }
  return sortedMeetings;
};
