import React from 'react';
import styles from "./CourseDetail.module.css";
import {RiArrowDropDownLine} from "react-icons/ri";
import { useRouter } from 'next/navigation';
const CourseDetail = ({description, image}) => {
   const router= useRouter();
    const Learn = ["Become a cybersecurity professional", 
        "Understand common cyber threats and attack methods",
        "Learn how to implement basic security measures",
        "Develop skills in risk management and vulnerability assessment",
        "Gain practical experience with security tools and protocols",
        "Learn about incident response and disaster recovery"
    ]
    const Requirements = [
        "No prior cybersecurity experience is needed",
        "Basic understanding of computers and networks will be helpful",
        "A computer with internet access for hands-on exercises"
    ]

    const reviews= [
        {title: "Excellent Course, I Love It 😍", name: "Mark Williams", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.", date: "july 21, 2024", image: "/Assets/review1.png"},
        {title: "My Daughter is very much happy with this products", name: "Alexa Johnson", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",date: "july 21, 2024",  image: "/Assets/review2.png"},
        {title: "My Daughter is very much happy with this products", name: "Alexa Johnson", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.", date: "july 21, 2024", image: "/Assets/review2.png"},
       
    ]
  return (
    <div className={styles.course_detail_container}>
        <div className={styles.right_course_section}>
            <div className={styles.course_overview}>
                <h3>Course Overview</h3>
                <p>{description}</p>
            </div>

            <div className={styles.learn_requirement}>
                <ul className={styles.requirement_container}>
                    {
                        Learn.map((item, index) => (
                            <li key={index}> <img src="/Assets/Black.png" alt="icon" /> {item}</li>
                        ))
                    }
                </ul>
                <h3 className={styles.requirement_header}>Requirement</h3>
                <ul className={styles.requirement_container}>
                    {
                        Requirements.map((item, index) => (
                            <li key={index}> <img src="/Assets/Black.png" alt="icon" /> {item}</li>
                        ))
                    }
                </ul>
            </div>

            <div className={styles.review_container}>
                <h3>Review</h3>

                <div className={styles.review_img_container}>
                    <img src="/Assets/reviews.png" alt="review"/>
                </div>

                <div className={styles.reviews_container}>
                    {
                        reviews.map((item, index) => (
                            <div className={styles.review_card} key={index}>
                                <div className={styles.card_top_section}>
                                    <div className={styles.card_profile}>
                                        <img src={item.image} alt="profile_picture"/>
                                    </div>
                                    <div className={styles.card_top_content}>
                                        <p>{item.name}</p>
                                        <div className={styles.img_star_review}>
                                            {
                                                Array.from({length: 5}).map((_, index) => (
                                                    <img src='/Assets/star.png' alt='' key={index}/>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <p className={styles.bottom_text}>Review By: <b>Excellent</b>, Posted on: <b>{item.date}</b></p>


                            </div>
                        ))
                    }
                     <div className={styles.review_button}>
                                    <button>View More</button>
                                </div>
                </div>
            </div>
        </div>

      
    <div className={styles.courseDetailContainer}>
    <button className={styles.shareButton}><img src="/Assets/share.png" alt='share icon'/> <span>Share</span></button>
      <div className={styles.courseDetailCard}>
        {/* Header with Image and "Share" Button */}
        <div className={styles.header}>
          <img
            src={image}
            alt="Course Preview"
            className={styles.courseImage}
          />
          <img
            src="/Assets/play.png"
            alt="Course Preview"
            className={styles.courseplay}
          />
        </div>

        {/* Main Content */}
        <div className={styles.content}>
          <h3 className={styles.lessonHeading}>12 Lessons (05 hr 20 mins)</h3>

          {/* Lesson List */}
          <ul className={styles.lessonList}>
            <li>
              <span className={styles.lessonTitle}>
                01 Introduction to Digital Assets
              </span>
              <span className={styles.lessonTime}>38 min</span>
            </li>
            <li>
              <span className={styles.lessonTitle}>
                02 Design Principles for Beginners
              </span>
              <span className={styles.lessonTime}>30 min</span>
            </li>
            <li>
              <span className={styles.lessonTitle}>
                03 Advanced Techniques in Digital Creation
              </span>
              <span className={styles.lessonTime}>1 hr 30 min</span>
            </li>
            <li>
              <span className={styles.lessonTitle}>
                04 Final Project &amp; Review
              </span>
              <span className={styles.lessonTime}>2 hr</span>
            </li>
            <p className={styles.more_videos}><span>04 more videos</span> <RiArrowDropDownLine/></p>
          </ul>

          {/* Motivational Text */}
          <div className={styles.text_motivation}>
          <h4 className={styles.subHeading}>Ready to Dive in?</h4>
          <p className={styles.subText}>
            Enroll Now and Start Building Your Digital Future!
          </p>
          </div>

          {/* Certification Checkboxes */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Select Certification*</label>
            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" />
                Security++
              </label>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" />
                Network++
              </label>
            </div>
          </div>

          {/* Live Training Schedule (Radio) */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Live Training Schedule</label>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input type="radio" name="schedule" defaultChecked />
                Full Time
              </label>
              <label className={styles.radioLabel}>
                <input type="radio" name="schedule" />
                Part Time
              </label>
            </div>
          </div>

          {/* Learning Mode Options */}
          <div className={styles.learningMode}>
            <h5 className={styles.label}>Learning Mode</h5>
            <div className={styles.modeOptions}>
              <div className={styles.modeCard}>
                <h6>Live Training</h6>
                <p>Join live sessions at scheduled times for interactive learning.</p>
              </div>
              <div className={styles.modeCard}>
                <h6>Self-Paced Training</h6>
                <p>Learn at your own pace, whenever it’s convenient for you.</p>
              </div>
            </div>
          </div>

          {/* Footer with Price and Button */}
          <div className={styles.footer}>
            <div className={styles.price}>$88.88</div>
            <button className={styles.enrollButton} onClick={() => router.push("/checkout")}>Enroll Now</button>
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}

export default CourseDetail