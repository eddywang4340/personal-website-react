import project1_img from '../assets/project_1.png'
import project2_img from '../assets/project_2.jpg'
import project3_img from '../assets/project_3.jpg'
import project4_img from '../assets/project_4.png'
import project5_img from '../assets/project_5.jpg'
import project6_img from '../assets/project_6.svg'

export const display_projects = [
    {
        w_no:1,
        w_name: "RizzVision - HTN 2024",
        w_bp_1: "Developed an AI-powered system using a Raspberry Pi 5 with a webcam, mic, and speaker to analyze real-time conversations.",
        w_bp_2: "Integrated AI inference through Groq API for speech/sentiment analysis, providing users with real-time suggestions.",
        w_bp_3: "Used Flask for UI and MongoDB to store conversation data including the report, managing data between backend and frontend.",
        w_bp_4: "Leveraged AssemblyAI for STT, OpenAI for TTS, and OpenCV with a custom-trained model for emotion detection.",
        w_img:project5_img
    },
    {
        w_no:2,
        w_name: "Bird Classifier - ML",
        w_bp_1: "Learned basics of machine learning through Google's crash course (introduction to TensorFlow and training/testing data).",
        w_bp_2: "Categorized bird species into NumPy arrays and partitioned the data set into a training data and a testing data.",
        w_bp_3: "Used TensorFlow Keras to build a sequential model and added Conv2D filters to increase the depth of image perception.",
        w_bp_4: "Saved evaluated and trained model as a JSON file to be used to predict the bird species of a singular image.",
        w_img:project1_img
    },
    {
        w_no:3,
        w_name: "Hand Controlled Robotic Arm",
        w_bp_1: "Implemented Google's media pipe computer vision library to track hand motion using multiple landmarks.",
        w_bp_2: "Built arm by installing servos for each joint of the arm and wired them to an Arduino, dedicating each servo to a pin.",
        w_bp_3: "Committed code to main repository in GitHub, while creating branches for each method of sending data to the servos.",
        w_bp_4: "Created an algorithm to count the number of fingers held up by comparing the positions of knuckle landmarks.",
        w_img:project2_img
    },
]

export const projects_data = [
    {
        w_no:1,
        w_name: "RizzVision - HTN 2024",
        w_bp_1: "Developed an AI-powered system using a Raspberry Pi 5 with a webcam, mic, and speaker to analyze real-time conversations.",
        w_bp_2: "Integrated AI inference through Groq API for speech/sentiment analysis, providing users with real-time suggestions.",
        w_bp_3: "Used Flask for UI and MongoDB to store conversation data including the report, managing data between backend and frontend.",
        w_bp_4: "Leveraged AssemblyAI for STT, OpenAI for TTS, and OpenCV with a custom-trained model for emotion detection.",
        w_img:project5_img
    },
    {
        w_no:2,
        w_name: "Bird Classifier - ML",
        w_bp_1: "Learned basics of machine learning through Google's crash course (introduction to TensorFlow and training/testing data).",
        w_bp_2: "Categorized bird species into NumPy arrays and partitioned the data set into a training data and a testing data.",
        w_bp_3: "Used TensorFlow Keras to build a sequential model and added Conv2D filters to increase the depth of image perception.",
        w_bp_4: "Saved evaluated and trained model as a JSON file to be used to predict the bird species of a singular image.",
        w_img:project1_img
    },
    {
        w_no:3,
        w_name: "Hand Controlled Robotic Arm",
        w_bp_1: "Implemented Google's media pipe computer vision library to track hand motion using multiple landmarks.",
        w_bp_2: "Built arm by installing servos for each joint of the arm and wired them to an Arduino, dedicating each servo to a pin.",
        w_bp_3: "Committed code to main repository in GitHub, while creating branches for each method of sending data to the servos.",
        w_bp_4: "Created an algorithm to count the number of fingers held up by comparing the positions of knuckle landmarks",
        w_img:project2_img
    },
    {
        w_no:4,
        w_name: "OOP Arm Programming",
        w_bp_1: "Applied OOP for 4 subsystems, containing multiple objects including motors, motor controllers, and sensors.",
        w_bp_2: "Accessed NetworkTables to send data (including encoder values and setpoints), which helped make testing more effective.",
        w_bp_3: "Utilized PID control for the arm's motion and explored the effect of different control types and trapezoid profiling.",
        w_bp_4: "Organized project by going through prototyping phases, inverse kinematics calculations, and simple motor configurations.",
        w_img:project3_img
    },
    {
        w_no:5,
        w_name: "Auxilium Website Design",
        w_bp_1: "Implemented Django framework to create HTML templates and collected user data through models.py and forms.py.",
        w_bp_2: "Devised Python algorithm to create mentee-mentor pairs based on field information (grade, subjects, and program).",
        w_bp_3: "Embedded a form within the website to effectuate the logging of volunteer hours for mentors and executives.",
        w_bp_4: "Designed a sign-in and sign-up component to create user profiles and meeting spaces for mentees/mentors during meetings.",
        w_img:project4_img
    },
]