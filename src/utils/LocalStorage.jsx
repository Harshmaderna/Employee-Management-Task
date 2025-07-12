const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "1234",
    tasks: [
      {
        title: "Follow up with client",
        description: "Call the client and discuss the renewal contract.",
        date: "2025-07-09",
        category: "Call",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Submit report",
        description: "Submit the weekly report to manager.",
        date: "2025-07-10",
        category: "Report",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Product feedback analysis",
        description: "Review customer feedback and prepare a summary.",
        date: "2025-07-08",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "1234",
    tasks: [
      {
        title: "Training session",
        description: "Attend internal customer service training.",
        date: "2025-07-09",
        category: "Training",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "CRM update",
        description: "Update the CRM with recent client information.",
        date: "2025-07-08",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "1234",
    tasks: [
      {
        title: "Resolve ticket #453",
        description: "Resolve issue regarding billing error.",
        date: "2025-07-07",
        category: "Support",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Team meeting",
        description: "Join team sync-up to discuss KPIs.",
        date: "2025-07-09",
        category: "Meeting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Feedback form check",
        description: "Verify client feedback forms from last week.",
        date: "2025-07-05",
        category: "Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "1234",
    tasks: [
      {
        title: "Appointment confirmation",
        description: "Confirm schedule for 3 pending appointments.",
        date: "2025-07-06",
        category: "Call",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Prepare slides",
        description: "Make presentation for upcoming demo.",
        date: "2025-07-10",
        category: "Presentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "1234",
    tasks: [
      {
        title: "Daily summary email",
        description: "Send summary email to all team members.",
        date: "2025-07-09",
        category: "Email",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client survey analysis",
        description: "Analyze client satisfaction survey results.",
        date: "2025-07-08",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Demo call with lead",
        description: "Call with potential client to showcase services.",
        date: "2025-07-10",
        category: "Call",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "1234"
  }
];



export const setLocalsStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees =  JSON.parse(localStorage.getItem('employees'))
  const admin =  JSON.parse(localStorage.getItem('admin'))
  return {employees, admin}
}