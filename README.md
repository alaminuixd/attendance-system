# Attendance System

## Functional Requirements

### Admin:

The super admin account will be generated during application installation

Admin will have the following controls

-   Creating students
-   Can update, delete and check students information
-   Changing status of a student
-   Enable/ disable attendance entry system
-   Can check status of a given day

### Students:

-   Students can register for an account
-   There will be the following types of state for accounts
    -   Pending
    -   Active
    -   Reject
-   Users can login with their individual credentials.
-   Pending & Rejected users wouldn’t have anything in their profile
-   Active users can update their profile info
    -   First Name
    -   Last Name
    -   Email
    -   Phone Number
    -   Profile Picture
-   Active user can change/ update their password
-   Active users can see their logs/ timesheet
    -   Calendar view
    -   List view
    -   Table view
    -   List View
-   Active users can participate in the attendance system
-   User can logout

## Requirement Analysis

### Models

**User:**

-   Name
-   Email
-   Password
-   Roles
-   Account Status

**Profile**

-   First Name
-   Last Name
-   Phone Number
-   Profile Picture/ _avatar_
-   User

**Student Attendance**

-   UserID
-   CreatedAt: Date Time
-   Admin attendanceId

**Admin Attendance**

-   CreatedAt: Date Time
-   Status
-   Time Limit

## Endpoints

### **Students**

-   POST /auth/login [public route]
-   POST /auth/register [public route]
-   PATCH /profile/:profileId [private]
-   PATCH /profile/avatar [private]
-   PUT /auth/change-password [private]
-   GET /timesheet [private]
-   GET /attendance [private]
-   GET /attendanceStatus [private]

### Admin

-   GET /users [private]
-   POST /users [private]
-   PATCH /user/:userId [private]
-   DELETE /users/:userId [private]
-   GET /users/:userId [private]
-   GET /profiles [private]
-   POST /profiles/:profileId[private]
-   DELETE /profiles/:profileId [private]
-   GET /profiles/:profileId [private]
-   GET /timesheet/userId [private]
-   GET /timesheet/stats
-   GET /attendance/enable [private]
-   GET /attendance/disable/:attendanceId [private]
