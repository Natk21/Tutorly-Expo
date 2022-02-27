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
  const sortedMeetings = {};
  console.log("Prefor", meetings);
  for (let i = 0; i < meetings.length; i++) {
    if (!sortedMeetings[meetings[i].subject]) {
      //if yes, it means the array has alrady has been created
      sortedMeetings[meetings[i].subject] = [];
    }
    sortedMeetings[meetings[i].subject].push(meetings[i]);
  }
  return sortedMeetings;
};

export const createSectionData = (meetings) => {
  const sortedData = sortBySubject(meetings);
  const keys = Object.keys(sortedData); // ["Math", "Science", "ComputerScience", "Language"]
  const sections = [];
  for (const key of keys) {
    sections.push({ title: key, data: sortedData[key] });
  }

  return sections;
};
