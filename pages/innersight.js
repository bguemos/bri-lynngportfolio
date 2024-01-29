

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Innersight.module.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Project from '@/components/projects'
import Button from '@/components/buttons'


export default function Innersight() {


  function handleClick(e) {
    const element = e.target;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const bgPosX = `${(x / rect.width) * 100}%`;
    const bgPosY = `${(y / rect.height) * 100}%`;
    element.style.backgroundPosition = `${bgPosX} ${bgPosY}`;
}


  return (
    <>
      <Head>
        <title>Bri-lynn Guemos</title>
        <meta name="description" content="Bri-lynn Guemos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Anybody:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,700;1,800;1,900&display=swap"
        />
      </Head>
      <Header />
      <main>
       <h1 className={styles.header}>Innersight</h1>
       <div className={styles.main}>
        <div className={styles.firstcontent}>
            <h1>Innersight is a digital journaling Application to assist people with their mental health.</h1>
            <h4 className={styles.innerapp}>Innersight was developed to provide individuals who maintain regular journals with a secure platform to express their emotions and thoughts conveniently and universally. By employing AI sentiment recognition, Innersight assesses previous journal entries, assisting users in better understanding their emotions and behaviours. </h4>
              <h4 className={styles.innerapp}>It has the potential to identify events that may contribute to worsening symptoms while also highlights positive experiences in their daily lives. This tool is beneficial for individuals, whether diagnosed or undiagnosed, as it allows the AI to analyze entries spanning weeks, months, or years. This eliminates the need to manually revisit past entries to identify potential triggers, events, and patterns.</h4>
            <h4 className={styles.innerapp}>My Roles: Front-end Developer, UI/UX Designer</h4>

        </div>
        <div className={styles.overview}>
            <div className={styles.leftcontent}>
                <h2 className={styles.caption}>Project Overview</h2>
                <p className={styles.body}>At the beginning of the process, there was high focus on competitive and user research. Through this, 3 major painpoints were identified that innersights target market were experiencing with traditional journaling and exisiting journaling apps, those painpoints were:</p>
                <ul className={styles.body}>People who journal frequently have a hard time identifying patterns in their behaviour because it is challenging and time consuming to go back and analyze all of your entries. </ul>
                <ul className={styles.body}>Organizing and being able to recall entries is challenging because it is hard to organize traditional journals or digital applications currently used to journal.</ul>
                <ul className={styles.body}>People who journal often sometimes encounter writers block or find it hard to start.</ul>

            </div>
            <div className={styles.rightcontent}>
                <Image
                src="/projectImages/img01.png"
                height={500}
                width={600}
                alt='phone'
               
                />

            </div>

        </div>
        <h1>Design Process</h1>
        <div>
            <hr className={styles.line}></hr>

        </div>

        <div className={styles.overview}>
            <div className={styles.leftcontent1}>
              <h1>Logo and colour pallet</h1>
              
              <p >In crafting the design, the goal was to ensure a high level of user-friendliness. The monochromatic purple palette was chosen to enhance feelings of calmness, safety, and relaxation.</p>
              <Image 
              src="/projectImages/innersighthex.png"
              height={120}
              width={450}
              alt='hex'
              
              />
              <h2>Logo</h2>
              <p>For the logo design, it used the same monochromatic pallet, the initial logo was designed to look like a person kneeling.</p>
              <Image
               src='/projectImages/initiallogo.png'
               height={80}
               width={80}
               alt='initial logo'
              />
              <p>After considering the concept of the app, a new logo was designed that was more open and hopeful creating the concept of an open flower that can be percieved as open pages of a book.</p>
              <Image
              src='/projectImages/logo.png'
              height={80}
              width={80}
              alt='final logo'
              
               />
            

            </div>
         
            <div className={styles.rightcontent2}>
                <h1>Mascots</h1>
                <p>To add a personal and engaging touch, mascots were introduced to the application.</p>
              <p>The panda to represent peace and friendship, the frog for wisdom, the otter to represent kindness, and the sloth for relaxation and patience.</p>
              <div className={styles.mascots}>
                <Image
                src="/mascots/Panda.png"
                height={80}
                width={80}
                alt='panda'
                />
                  <Image
                src="/mascots/Frog.png"
                height={80}
                width={80}
                alt='frog'
                />
                  <Image
                src="/mascots/Otter.png"
                height={80}
                width={80}
                alt='otter'
                />
                  <Image
                src="/mascots/Sloth.png"
                height={80}
                width={80}
                alt='sloth'
                />

             

              </div>
              <div className={styles.mascots}>
              <h4>Panda</h4>
                <h4>Frog</h4>
                <h4>Otter</h4>
                <h4>Sloth</h4>
              </div>
              <p>You can encounter the mascots across the app, offering personalized recommendations and AI analyses to assist you in navigating through your next steps.</p>
              <div className={styles.mascots}>
              <Image
                src="/projectImages/pandaexercising.png"
                height={100}
                width={80}
                alt='panda'
                />
                  <Image
                src="/projectImages/slothknitting.png"
                height={100}
                width={80}
                alt='frog'
                />
                  <Image
                src="/projectImages/slothPhone.png"
                height={100}
                width={80}
                alt='otter'
                />
                  <Image
                src="/projectImages/ottersleeping.png"
                height={100}
                width={80}
                alt='sloth'
                />
                </div>
                <p>Incorporating mascots throughout the app was a way to instill a sense of comfort and familiarity, enhancing user experience and creating a welcoming environment</p>
          
        
               

            </div>
          

        </div>
        <div className={styles.overview}>
            <div className={styles.leftcontent2}>
              <h1>IOS Screenshots</h1>
              <div className={styles.mascots}>
                <Image 
                 src='/projectImages/screenshot1.png'
                 height={400}
                 width={200}
                 alt='screenshot'
                />

                <Image 
                 src='/projectImages/screenshot2.png'
                 height={400}
                 width={200}
                 alt='screenshot'
                />

               
              </div>

            </div>
         
            <div className={styles.rightcontent3}>
             
               
            <div className={styles.screenshots}>
                <Image 
                 src='/projectImages/screenshot3.png'
                 height={400}
                 width={200}
                 alt='screenshot'
                />

                <Image 
                 src='/projectImages/screenshot4.png'
                 height={400}
                 width={200}
                 alt='screenshot'
                />

               
              </div>
            </div>
          

        </div>
        <div className={styles.prototyping}>
          <h1>User Journey Map</h1>
        <div className={styles.prototypingcontent1}>
            <div className={styles.lowfi}>
            <div
                  className={`${styles.zoomImage} ${styles.journeymap}`}
                  style={{ backgroundImage: `url('/projectImages/user.png')` }}
                  onClick={(e) => handleClick(e)}
              />
            
            <h2>User Journey Map</h2>
            <p className={styles.description}>
            Prior to transitioning to the wireframes, a user journey map tracking the steps a user would undergo when interacting with the app. The aim was to ensure that the users could effortlessly access the primary features without encountering confusion or unnecessary steps.
            </p>
          
            </div>
        </div>

        </div>
        <div className={styles.prototyping}>
            <h1>UX Design and Prototype</h1>

            <div className={styles.prototypingcontent}>
            <div className={styles.lowfi}>
              <div>
            <Image 
            src=""
            height={10}
            width={10}
            alt=''
            />
            </div>
            <h2>Lo-fi Prototype</h2>
            <p className={styles.description}>
             When developing the lo-fi prototype,  there was an aim to maintain a consistent and user-friendly layout. Given that the app targets individuals with mental health concerns, there was a priority in preserving its primary purpose: providing a safe space for users to journal their thoughts and emotions without distractions.</p>
            </div>
            <div className={styles.lowfi}>
            <div>
              <Image 
              src=""
              height={10}
              width={10}
              alt=''
              />
            </div>
          
            <h2>High-fi Prototype</h2>
            <p className={styles.description}>

            In crafting the high-fidelity prototype, the chosen color palette, mascots, and images were integrated to finalize the design. The aim was to create a cohesive visual identity that resonates with the target audience while ensuring a seamless user experience. By incorporating these elements thoughtfully, we sought to enhance engagement and maintain the app's core focus as a supportive platform for journaling thoughts and emotions, particularly for individuals grappling with mental health concerns
            </p>
            </div>
            
           
           
        
            </div>
          
            <div className={styles.overview}>
            <div className={styles.leftcontent4}>
                <h1>User Persona</h1>
                <Image
                src="/projectImages/amaya.png"
                height={500}
                width={500}
                alt='amaya'
                
                />

            </div>
            <div className={styles.rightcontent4}>
              <h1>Amaya Ali</h1>
              <p>Amaya Ali was the main user persona. She is a 24 year old full time student at BCIT. Amaya has been diagnosed with anxiety and depression and journals conisistently to help her deal with her symptoms.</p>
              <p>Amaya encounters challenges expressing her feelings in writing and often gets stuck in the process. She refrains from carrying her journal outside due to fear of loss or exposure, resorting to the Notes app while on the go. Revisiting past entries triggers intense emotions for her, hindering her ability to reflect, especially during therapist-guided exercises. The prospect of reliving negative experiences is daunting and unwelcome.</p>
              <p>These issues represent Amaya's primary pain points with traditional journaling. Innersight addresses these concerns by offering AI analysis, ensuring journals are securely locked with passwords, and providing prompts to facilitate writing sessions.</p>
              

            </div>

        </div>
        

        <div className={styles.coding}>
            <h1>Coding Process</h1>
            <div className={styles.codingcontent}>
              <div className={styles.codingleft}>
            <p className={styles.codingdescription}>
                In sprinting out the frontend development of the screens, the main focus was on user experience to ensure seamless interaction and engagement. Here's how the design is brought to life:</p>
               <ul className={styles.codingdescription} ><strong>User-Centric Design:</strong> Every aspect of the interface is meticulously crafted with the user in mind, aiming for intuitive navigation and clarity in functionality.</ul> 
               <ul className={styles.codingdescription}> <strong>Key Features Accessibility:</strong> emphasize the accessibility of key features, ensuring users can easily locate and utilize them without encountering unnecessary complexity.</ul>
               <ul className={styles.codingdescription}> <strong>Responsive Design:</strong> The design approach prioritizes responsiveness across various devices and screen sizes, guaranteeing a consistent and optimized experience for all users.</ul>
               <ul className={styles.codingdescription}> <strong>Visual Appeal:</strong> Through thoughtful use of colors, typography, and visual elements, it enhanced the aesthetic appeal of the interface, creating an inviting and engaging environment.</ul>
               <ul className={styles.codingdescription}>  <strong>Interactive Elements:</strong> Interactive components such as buttons, forms, and animations enrich user interaction, fostering a dynamic and immersive experience.</ul>
               <ul className={styles.codingdescription}> <strong>Feedback Integration: </strong>incorporated feedback mechanisms to keep users informed about their actions, providing real-time responses and enhancing overall usability.</ul>
               <ul className={styles.codingdescription}><strong> Accessibility Considerations:</strong> adhere to accessibility standards, making our interface inclusive and accessible to users with diverse needs and abilities.</ul>
          <h3>Ai Sentiment Analysis and Firebase</h3>
          <p className={styles.codingdescription}>
          When integrating the AI Sentiment recognition, the system was refined to effectively categorize the sentiment of each journal entry. Through text processing techniques, The sentiment deconstructed the journal entries into discernible elements, providing users with insights into the positive or negative tones within their entries.
          </p>
          <p>his process established the framework for the integration of personalized recommendations, leveraging individual sentiment analysis data provided by users.</p>
          
        </div>

            <div className={styles.codingright}>
            <video  width="600" height="360" controls>
            <source src="part2.mp4" type="video/mp4"/>
            
            </video>
            <div className={styles.buttoncontainer}>
          <Button 
          title="View Code"
          link="https://github.com/Mariessa-Pinto/innersight.git"
          />
          </div>
            </div>
            </div>
        </div>
 </div>
          <div className={styles.websupplement}>
            <h1>Innersight Website</h1>
            <p>To enhance the application, an Innersight web app was developed, offering users a desktop-based interface to access their accounts.</p>
            <div className={styles.bottomimage}>
            <Image className={styles.websupp}
            src={'/projectImages/websupplement.png'}
            height={600}
            width={1000}
            alt='web'
            />
            <div className={styles.buttongroup}>
              <Button 
              title="view Website"
              link="https://webapp.innersightapp.ca/"
              />
              <Button 
              title="View Other Projects"
              link="/projects"
              />

            </div>
            </div>

            
          </div>

       </div>
      


     
        
        
      </main>
      <Footer />
    </>
  )
}