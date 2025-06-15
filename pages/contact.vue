<template>
  <div class="contact">
    <!-- Page Title -->
    <div class="pageTitle" data-aos="fade-up">
      <i class="bi bi-claude"></i>
      <h2>Contact</h2>
      <i class="bi bi-claude"></i>
    </div>

    <div class="content">
      <div class="box">
        <!-- Contact Card -->
        <div class="contactCard" data-aos="fade-up">
          <h2>Get in touch</h2>
          <div class="mail">
            <h3>Send a mail to</h3>
            <a href="mailto:benzamasimon@gmail.com" target="_blank"
              >benzamasimon@gmail.com</a
            >
          </div>
          <div class="call">
            <h3>Call me</h3>
            <a href="tel:+2347042905431" target="_blank">07042905431</a>
          </div>
          <div class="socials">
            <h3>Follow on socials</h3>
            <a class="socialLink github" href="#">
              <i class="bi bi-github"></i>
              <p>GitHub</p>
            </a>
            <a class="socialLink linkedin" href="#">
              <i class="bi bi-linkedin"></i>
              <p>LinkedIn</p>
            </a>
            <a class="socialLink twitter" href="#">
              <i class="bi bi-twitter-x"></i>
              <p>Twitter/X</p>
            </a>
            <a class="socialLink instagram" href="#">
              <i class="bi bi-instagram"></i>
              <p>Instagram</p>
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contactForm" data-aos="fade-up">
          <form action="" data-aos="fade-up">
            <div class="pageTitle" data-aos="fade-up">
              <i class="bi bi-claude"></i>
              <h2>Send a mail</h2>
              <i class="bi bi-claude"></i>
            </div>
            <div class="inputControl">
              <input type="text" id="fullName" placeholder=" " required />
              <label for="fullName">Full Name</label>
            </div>
            <div class="inputControl">
              <input type="email" id="email" placeholder=" " required />
              <label for="email">Email</label>
            </div>
            <div class="inputControl">
              <input type="text" id="subject" placeholder=" " required />
              <label for="subject">Subject</label>
            </div>
            <div class="inputControl">
              <textarea
                id="message"
                placeholder=" "
                rows="4"
                required
              ></textarea>
              <label for="message">Your Message</label>
            </div>
            <button type="submit" class="btn-submit">Send Message</button>
          </form>
        </div>
      </div>

      <!-- Hire on freelance -->

      <div class="gig">
        <div class="pageTitle" data-aos="fade-up">
          <i class="bi bi-claude"></i>
          <h2>Hire on freelance</h2>
          <i class="bi bi-claude"></i>
        </div>
        <div class="hire" data-aos="fade-up">
          <a href="">
            <img src="@/assets/icons/upwork.png" alt="" />
            <p>Hire on Upwork</p>
          </a>
        </div>
      </div>
    </div>

    <get-in-touch data-aos="fade-up" />
  </div>
</template>

<script setup>
// Add your form submit logic here (e.g., send to email service or API)
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.contact {
  .content {
    padding: 0 5%;
    .box {
      display: flex;
      flex-direction: column;
      gap: 25px;

      /* Contact Card */

      .contactCard {
        flex: 1 1 300px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 20px;
        background: linear-gradient(60deg, #00aab3, #4df6ff);
        color: #fcfcfc;
        border-radius: 20px;

        h2 {
          font-family: header-font;
        }

        > div {
          h3 {
            font-family: sub-header-font;
            font-size: 15px;
          }
          a {
            font-family: body-font;
            font-size: 12.5px;
            &:hover {
              text-decoration: underline;
            }
          }

          .socialLink {
            margin-top: 10px;
            width: max-content;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 20px;
            background-color: #fcfcfc;
            color: #25282c;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
              text-decoration: none;
              background-color: #25282c;
              color: #fcfcfc;
              transform: scale(1.1);
            }
          }
        }
      }

      /* Contact Form */

      .contactForm {
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;

          .pageTitle {
            padding: 25px 0;
            font-size: 17.5px;
          }

          .inputControl {
            position: relative;
            width: 100%;

            input,
            textarea {
              width: 100%;
              padding: 12px;
              border: 1px solid var(--opaque-border-color);
              border-radius: 10px;
              background: transparent;
              font-family: body-font;
              font-size: 15px;
              color: var(--priamry-color);
            }

            textarea + label {
              top: 25%;
            }

            label {
              position: absolute;
              top: 50%;
              left: 12px;
              transform: translateY(-50%);
              background: var(--bg-color);
              color: var(--primary-color);
              padding: 0 4px;
              font-family: sub-header-font;
              pointer-events: none;
              transition: all 0.2s ease;
            }

            input:focus + label,
            input:not(:placeholder-shown) + label,
            textarea:focus + label,
            textarea:not(:placeholder-shown) + label {
              top: 0px;
              font-size: 12.5px;
              color: #00aab3;
            }
          }

          .btn-submit {
            padding: 10px 20px;
            font-family: body-font;
            background-color: var(--accent-color);
            color: var(--secondary-color);
            border: none;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
              background-color: var(--reverse-accent-color);
              color: var(--primary-color);
              transform: scale(1.05);
            }
          }
        }
      }
    }

    /* Hire on freelance */

    .gig {
      margin: 50px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .hire {
        a {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 10px 20px;
          background-color: var(--secondary-color);
          color: var(--primary-color);
          font-family: body-font;
          border: 1px solid var(--primary-color);
          border-radius: 20px;
          transition: all .3s;

          img {
            width: 25px;
            height: 25px;
          }

          &:hover {
            background-color: var(--primary-color);
            color: var(--secondary-color);
            transform: scale(1.1);
          }
        }
      }
    }
  }

  @include respond(md) {
    .content {
      padding: 0 7.5%;
      .box {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @include respond(lg) {
    .content {
      padding: 0 10%;
      .box {
        padding: 0 10%;
      }
    }
  }
}
</style>