
 export const myAnswersArray= [
      {
        question: "Who’s Michael Scott?",
        answer: "THE WORLD'S BEST BOSS"
      },
    {
     question: "What is the organization’s identifier called?", 
     answer: "It is either the organization’s slug(which is the name of the organization) or the organization’s id."
    },
    {
      question: "What type of out of the box HRIS and ATS integrations do ChartHop support?",
      answer: "For all members: BambooHR, Gusto, Justworks, Namely, Sapling, Zenefits. For Standard and Premium Members: ADP, Humaans, Paylocity, Rippling, Sequoia One, SuccessFactors, TriNet, Workday"
    },
    {
      question: "What is the benefit to a company to integrate its ATS with ChartHop? From a data management perspective?",
      answer: "It allows HR and all business professionals to interact with People-Data in a more visual and interactive way. It even lets permitted users create scenarios so they can visualize their plans prior to executing them."
    },
    {
      question: "If I move an employee to a new role in ChartHop, what is the expected behavior in the HRIS?",
      answer: "If you have Greenhouse, Jobvite, or Lever this new change will be automatically updated."
    },
    {
      question: "How would a client set up an alias for a department in ChartHop?",
      answer: "The benefit of setting up an alias is if an organization happens to have a department listed under multiple names the alias allows the organization to combine them into one department."
    },
    {
      question: "An HR director wants to invite a new Manager, Frank, on his team into ChartHop so that he can help build reports for their Executive team. Frank is allowed to see the annual base salary for all employees in the company, except for his boss's and the other employees his boss reports into. How would you recommend the customer set up this access level?",
      answer: "You can use the User management feature to invite Frank to your organization. You can add Frank directly to your ChartHop organization using the Add user feature. From the Users view, select the Add user button. This will open the Invite org dialog. Choose the Non-member tab, and fill in all the fields: first and last name, work email, and his role. And Select Invite user when you're done. Once you created his user profile now assign Frank his new role as Manager. So go to your Users list and select the checkbox for Frank. Select Assign role from the options bar, use the Role dropdown to select compensation viewer. And Select Assign role when you're done.  Then when you are done check a custom filter limited access and create a filter.  Filter franks access to his boss and others above him. Be sure to test the filter to ensure that the permissions line up as you expect. You can click the Test button to retrieve a list of people and jobs matching the filter."
    },
    {
      question: "What’s a bundle?",
      answer: "ChartHop has one-click install bundles that contain additional built-in fields, forms, and custom profile tabs that integrate directly into your reporting and employee profiles. Included bundles include employee surveys about returning to the office, additional dashboard reports, as well as assessment forms for determining emergency and permanent successors. ChartHop continually adds additional bundles for you to choose from. "
    },
    {
      question: "What is the filter syntax for finding employees who are in the engineering department and report under Michael Scott?",
      answer: "manager=“Michael Scott” && department:engineering"
    },
    {
      question: "What is the difference between a user and a person in ChartHop?",
      answer: "The person resource allows you to either get, post, patch or delete a person. Whereas, the user resource allows internal members of an organization, as well as external parties  who have permission, to interact with the user's profile. The user resource has additional features such as revoking a user’s access token and changing a password."
    },
    {
      question: "Does a person profile need to exist in ChartHop in order to become a user as well?",
      answer: "No."
    },
    {
      question: "What API methods can you perform with the job API?",
      answer: "GET -   You can find jobs in the organization, return a particular job by id, count jobs or people in the organization, retrieve jobs from a region of the job graph, and returns a map of jobId to their sibling and direct counts and the corresponding ids, POST - You can Create a job and Perform a bulk update on a number of jobs, PATCH-  you can Update a job, and DELETE - you can Delete a job "
    },
    {
      question: "When would you use the org API endpoint?",
      answer: "To access, create, and update information regarding the org, such as: persons, jobs, and general data about the org. This endpoint allows you to do anything from getting all visible orgs, paginated by name to sending a test welcome email to oneself."
    },
    {
      question: "Why would an organization create a scenario?",
      answer: "Because it allows for a non destructive and experimental way for an organization to visualize their plans prior to permanently implementing them. It could save the organization resources from financial costs to manpower."
    },
    {
      question:"What is the difference between Actual Grants and Planned Grants in ChartHop?",
      answer:"The amount of Actual Grants have been actually issued, including vesting schedules, but Planned Grants has only been communicated or targeted, but not yet issued."
    },
  
  ]
  

export default {
  myAnswersArray
}