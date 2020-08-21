# Frontend Mentor - Base Apparel coming soon page

![Design preview for the Base Apparel coming soon page coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges allow you to improve your skills in a real-life workflow.

**To do this challenge, you need a basic understanding of HTML, CSS and JavaScript.**

## The challenge

Your challenge is to build out this coming soon page and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

## Where to find everything

Your task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design to work to. 

The designs are in JPG static format. This will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. This should help train your eye to perceive differences in spacings and sizes.

If you would like the Sketch file in order to inspect the design in more detail it is available to [purchase here](https://bmc.xyz/l/Pn38ZJp61).

You will find all the required assets in the `/images` folder. The assets are already optimized.

There is also a `style-guide.md` file, which contains the information you'll need, such as color palette and fonts.

## Building your project

Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

1. Initialize your project as a public repository on [GitHub](https://github.com/). This will make it easier to share your code with the community if you need some help. If you're not sure how to do this, [have a read through of this Try Git resource](https://try.github.io/).
2. Configure your repository to publish your code to a URL. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, but we recommend using [Vercel](https://bit.ly/fem-vercel). We've got more information about deploying your project with Vercel below.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes that you could create to make reusable styles.
4. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
5. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.
7. If you'd like to try making your project fully responsive, we'd recommend checking out [Sizzy](https://bit.ly/fm-sizzy). It's a great browser that makes it easy to view your site across multiple devices.

## Deploying your project

As mentioned above, there are a number of ways to host your project for free. We recommend using [Vercel](https://bit.ly/fem-vercel) as it's an amazing service and extremely simple to get set up with. If you'd like to use Vercel, here are some steps to follow to get started:

1. [Sign up to Vercel](https://bit.ly/fem-vercel-signup) and go through the onboarding flow, ensuring your GitHub account is connected by using their [Vercel for GitHub](https://vercel.com/docs/v2/git-integrations/vercel-for-github) integration.
2. Connect your project to Vercel from the ["Import project" page](https://vercel.com/import), using the "From Git Repository" button and selecting the project you want to deploy.
3. Once connected, every time you `git push`, Vercel will create a new [deployment](https://vercel.com/docs/v2/platform/deployments) and the deployment URL will be shown on your [Dashboard](https://vercel.com/dashboard). You will also receive an email for each deployment with the URL.

## Sharing your solution

There are multiple places you can share your solution:

1. Submit it on the platform so that other users will see your solution on the site. Here's our ["Complete guide to submitting solutions"](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) to help you do that.
2. Share your solution page in the **#finished-projects** channel of the [Slack community](https://www.frontendmentor.io/slack).
3. Tweet [@frontendmentor](https://twitter.com/frontendmentor) and mention **@frontendmentor** including the repo and live URLs in the tweet. We'd love to take a look at what you've built and help share it around.

## Giving feedback

Feedback is always welcome, so if you have any to give on this challenge please email hi[at]frontendmentor[dot]io.

This challenge is completely free. Please share it with anyone who will find it useful for practice.

**Have fun building!** 🚀

## Community Sponsors

A massive thank you to our community sponsors!

- [Sizzy](https://bit.ly/fm-sizzy) is an extremely useful browser designed specifically to improve a developer's workflow when building websites. You can fire up multiple device emulators and run them all in sync while building out your web pages. Perfect for helping build fully responsive websites!
- [Diversify Tech](https://bit.ly/fem-diversify-tech) is an amazing resource for underrepresented people in tech. The site features job listings for anyone seeking new opportunities. The resource section is also full of useful links to dive into!
- [Dracula PRO](https://bit.ly/fem-dracula) is a beautiful dark theme to help keep you focused and productive while you code. The theme isn't just for your editor either. You can also apply it to your most-used apps like your terminal and even Slack!
# base-apparel




<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- displays site properly based on user's device -->

    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="./images/favicon-32x32.png"
    />
    <link rel="stylesheet" href="style.css" />

    <title>Frontend Mentor | Fylo landing page with two column layout</title>
  </head>
  <body>
    <!-- 
    
    Get Started For Free Phone: +1-543-123-4567
    example@fylo.com About Us Jobs Press Blog Contact Us Terms Privacy -->
    <div class="container">
      <nav class="navbar sticky">
        <figure class="logo">
          <a href="#"><img src="images/logo.svg" alt="Fylo logo" /></a>
        </figure>
        <div class="menu">
          <a href="#">Features</a>
          <a href="#">Team</a>
          <a href="#">Sign In</a>
        </div>
      </nav>

      <div class="content">
        <div class="left-content">
          <h1>
            All your files in one secure <br />location, accessible anywhere.
          </h1>
          <p>
            Fylo stores your most important files in one secure location. Access
            <br />them wherever you need, share and collaborate with friends,
            family,<br />
            and co-workers.
          </p>
          <div class="input-form">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              aria-label="Email input"
            />
            <button class="btn btn-blue">Get Started</button>
          </div>
        </div>
        <div class="right-content">
          <img src="images/illustration-1.svg" alt="Illustration 1" />
        </div>
      </div>

      <div class="content curve"></div>
      <div class="content content-shadow">
        <div class="left-content">
          <h1>Stay productive, wherever you are</h1>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you <br />covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for<br />
            live collaboration. No email attachments required!
          </p>
          <a href="#">
            See how Fylo works
            <img src="images/icon-arrow.svg" alt="Next" />
          </a>

          <div class="testimonial-card">
            <img src="images/icon-quotes.svg" alt="quotes" />
            <p>
              Fylo has improved our team productivity by <br />an order of
              magnitude. Since making the <br />switch our team has become a
              well-oiled<br />
              collaboration machine.
            </p>
            <div class="profile">
              <img
                src="images/avatar-testimonial.jpg"
                alt="avatar photo"
                class="avatar"
              />
              <div class="profile-data">
                <span class="profile-name">Kyle Burton</span>
                <span class="profile-company">Founder & CEO, Huddle</span>
              </div>
            </div>
          </div>
        </div>
        <div class="right-content">
          <img src="images/illustration-2.svg" alt="Illustration 1" />
        </div>
      </div>

      <div class="content early-access">
        <div class="left-content">
          <h1>Get early access today</h1>
          <p>
            It only takes a minute to sign up and our free starter tier is<br />
            extremely generous. If you have any questions, our support team<br />
            would be happy to help you.
          </p>
        </div>
        <div class="right-content">
          <div class="input-form">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              aria-label="Email input"
            />
            <button class="btn btn-blue">Get Started</button>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <p class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >. Coded by <a href="#">NI1GHTMARE</a>.
      </p>
    </footer>
  </body>
</html>




@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

:root {
  --Very-Dark-Blue: hsl(243, 87%, 12%);
  --Desaturated-Blue: hsl(238, 22%, 44%);
  --Bright-Blue: hsl(224, 93%, 58%);
  --Moderate-Cyan: hsl(170, 45%, 43%);
  --Light-Grayish-Blue: hsl(240, 75%, 98%);
  --Light-Gray: hsl(0, 0%, 75%);
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  color: var(--Very-Dark-Blue);
}

.container {
  display: inherit;
  flex-direction: column;
  border: 2px dotted orange;
}

.navbar {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 2em 2em 1em 2em;
  /* border: 1px solid red; */
}

/* .logo {
  border: 1px solid red;
} */

.menu {
  font-family: "Raleway", sans-serif;
  margin-right: 1.5em;
  /* border: 1px solid red; */
}

.menu a {
  padding: 0 2em 0 2em;
  text-decoration: none;
  color: inherit;
  /* border: 1px solid blue; */
}

.content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2em 4.5em 5em 4.5em;
  border: 1px solid fuchsia;
}

.left-content {
  display: inherit;
  flex-direction: column;
  justify-content: center;
  border: 1px solid blue;
}

.left-content > h1 {
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  line-height: 1.5em;
  /* border: 1px solid darkcyan; */
}

h1, p {
  border: 1px solid lawngreen;
}

.left-content > a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--Moderate-Cyan);
  text-decoration-line: none;
  width: 10.5em;
  padding-bottom: 5px;
  border-bottom: 1px solid hsl(170, 45%, 43%);
}

.input-form {
  display: flex;
  justify-content: space-between;
  /* border: 1px solid darkcyan; */
}

.input-form > input {
  padding: 1em 2em;
  border-radius: 3px;
  width: 16em;
  border: 1px solid hsl(238, 22%, 44%);
}

.btn {
  font-family: "Raleway", sans-serif;
  width: 16em;
  border-radius: 3px;
  background-color: var(--Bright-Blue);
  color: white;
  border: none;
  box-shadow: 0px 3px 10px 1px hsl(0, 0%, 75%);
}

.right-content {
  display: flex;
  flex: 50%;
  justify-content: center;
  border: 1px solid darkcyan;
}

.right-content > img {
  max-width: 85%;
  margin: 70px auto;
  /* border: 1px solid red; */
}

.curve {
  background: url("images/bg-curve-desktop.svg") no-repeat;
  background-size: cover;
  background-position: center;
}

.content-shadow {
  /* background: url("images/bg-curve-desktop.svg") no-repeat; */
  background-color: var(--Light-Grayish-Blue);
  background-size: cover;
  background-position: center;
}

.testimonial-card {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 70%;
  background-color: white;
  margin-top: 3em;
  border-radius: 5px;
  padding: 1.5em 2em;
  box-shadow: 0px 0px 10px 8px hsl(0, 0%, 75%, 0.3);
  /* border: 1px solid red; */
}

.testimonial-card > img {
  height: 1em;
  align-self: flex-start;
  /* border: 1px solid darkcyan; */
}

.profile {
  display: inherit;
  /* border: 1px solid darkcyan; */
}

.avatar {
  height: 2.5em;
  width: 2.5em;
  border-radius: 150px;
  margin-right: 20px;
  /* border: 1px solid red; */
}

.profile-data {
  font-family: "Raleway", sans-serif;
  display: flex;
  justify-content: space-between;
  height: 100%;
  flex-direction: column;
  /* border: 1px solid grey; */
}

.profile-name {
  font-weight: bold;
  /* border: 1px solid grey; */
}

.profile-company {
  font-size: 11px;
  /* border: 1px solid grey; */
}

.early-access {
  background-color: var(--Desaturated-Blue);
  color: white;
}


footer {
  padding: 5px;
  background-color: rgba(185, 182, 211, 0.4);
}

.attribution {
  font-size: 12px;
  text-align: center;
}

.attribution a {
  color: hsl(228, 45%, 44%);
}



