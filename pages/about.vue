<template>
  <div class="about">
    <!-- Page Title -->

    <div class="pageTitle" data-aos="fade-up">
      <i class="bi bi-claude"></i>
      <h2>About</h2>
      <i class="bi bi-claude"></i>
    </div>

    <!-- Page Content -->

    <div class="content">
      <div class="gridContainer">
        <!-- Grid1 - Image -->

        <div class="grid grid1" data-aos="fade-up">
          <grid-card-2>
            <div class="wrapper">
              <div class="image">
                <img src="@/assets/images/headshot.jpg" alt="" />
              </div>
            </div>
          </grid-card-2>
        </div>

        <!-- Grid2 - About -->

        <div class="grid grid2" data-aos="fade-up">
          <grid-card-2>
            <div class="wrapper">
              <h3>Benzama Musa</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                quas recusandae omnis sunt sit soluta cum nam vel placeat?
                Explicabo perferendis dolore facilis soluta accusantium dicta
                voluptatem nihil rerum facere. lorem ipsum dolor sit amet
                consectetur adipisicing elit. Magni, quas recusandae omnis sunt
                sit soluta cum nam vel placeat? Explicabo perferendis dolore
                facilis soluta accusantium dicta voluptatem nihil rerum facere.
              </p>
            </div>
          </grid-card-2>
        </div>

        <!-- Grid 3 - Work Experience -->

        <div class="grid grid3" data-aos="fade-up">
          <grid-card-2>
            <div class="wrapper">
              <div class="header">
                <div class="icon">
                  <i class="bi bi-briefcase-fill"></i>
                </div>
                <h3>Work Experience</h3>
              </div>
              <hr />
              <div class="body">
                <li>
                  <div class="left">
                    <h3>Greysoft Technologies</h3>
                    <p>Intern</p>
                  </div>
                  <div class="right">
                    <div>2023 - 2024</div>
                  </div>
                </li>
              </div>
            </div>
          </grid-card-2>
        </div>

        <!-- Grid 4 - Education -->

        <div class="grid grid4" data-aos="fade-up">
          <grid-card-2>
            <div class="wrapper">
              <div class="header">
                <div class="icon">
                  <i class="bi bi-mortarboard-fill"></i>
                </div>
                <h3>Education</h3>
              </div>
              <hr />
              <div class="body">
                <li>
                  <div class="left">
                    <h3>Redeemers University</h3>
                    <p>BSc in Computer Science</p>
                  </div>
                  <div class="right">
                    <div>2024 - 2028</div>
                  </div>
                </li>
              </div>
            </div>
          </grid-card-2>
        </div>

        <!-- Grid 5 - Stats -->

        <div class="grid grid5" data-aos="fade-up">
          <grid-card-2>
            <div class="wrapper">
              <div>
                <h2>02</h2>
                <p>Years Experience</p>
              </div>
              <div>
                <h2>25+</h2>
                <p>Completed Projects</p>
              </div>
            </div>
          </grid-card-2>
        </div>

        <!-- Grid 6 - Profiles -->

        <div class="grid grid6" data-aos="fade-up">
          <grid-card>
            <div class="wrapper">
              <div class="icons">
                <div>
                  <i class="bi bi-linkedin"></i>
                </div>
                <div>
                  <i class="bi bi-github"></i>
                </div>
              </div>
              <div class="text">
                <p>Connect with me</p>
                <h2>Profiles</h2>
              </div>
            </div>
          </grid-card>
        </div>
      </div>
    </div>

    <infinite-slider data-aos="fade-up" />
    
  </div>
  
  
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.about {
  /* Grid 1 - About */

  .grid1 {
    .wrapper {
      padding: 15px !important;

      .image {
        width: 100%;
        height: 275px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
          padding: 0;
          margin: 0;
        }
      }
    }
  }

  @include respond(lg) {
    .grid1 {
      .wrapper {
        .image {
          display: flex;
          justify-content: center;
          img {
            width: 35%;
            border-radius: 50px 0 50px 0;
          }
        }
      }
    }
  }

  /* Grid 2 - About */

  .grid2 {
    .wrapper {
      display: flex;
      flex-direction: column;
      gap: 25px;

      h3 {
        font-family: header-font;
        font-size: 25px;
        font-weight: bold;
      }

      p {
        font-family: body-font;
        letter-spacing: 1px;
      }
    }
  }

  /* Grid 3 - Work Experience & Education */

  .grid3,
  .grid4 {
    .wrapper {
      .header {
        display: flex;
        align-items: center;
        gap: 10px;
        div {
          width: 27.5px;
          height: 27.5px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--accent-color);
          border-radius: 50%;
        }
        h3 {
          font-family: header-font;
          font-weight: bold;
        }
      }

      hr {
        margin: 15px 0;
        opacity: 0.25;
        border-radius: 5px;
      }

      .body {
        li {
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;

          .left {
            display: flex;
            flex-direction: column;
            gap: 5px;

            h3 {
              font-family: sub-header-font;
              font-size: 17.5px;
            }

            p {
              font-family: body-font;
              font-size: 12.5px;
            }
          }
          .right {
            div {
              background-color: var(--primary-color);
              border-radius: 5px;
              padding: 5px 10px;
              white-space: nowrap;
              font-family: header-font;
              font-weight: bold;
              font-size: 12.5px;
              color: var(--secondary-color);
            }
          }
        }
      }
    }
  }

  /* Grid 5 - Stats */

  .grid5 {
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 25px;
      padding: 10px 0;
      div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        text-align: center;
        border-radius: 25px 0 25px 0;
        box-shadow: 2px 2px 8px var(--shadow-color),
          -2px -2px 8px var(--shadow-color);
        padding: 10px 0;
        h2 {
          font-family: header-font;
        }
        p {
          font-family: sub-header-font;
          opacity: 0.75;
        }
      }
    }
  }

  @include respond(md) {
    .grid5 {
      .wrapper {
        flex-direction: row;

        div {
          height: max-content;
          padding: 25px 10px;
        }
      }
    }
  }

  /* Grid 6 - Profiles */

  .grid6 {
    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px 0 !important;
      .icons {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;
        padding: 40px 0 50px 0;
        div {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: var(--primary-color);
          box-shadow: 2px 2px 8px var(--shadow-color),
            -2px -2px 8px var(--shadow-color);
        }
      }
    }
    .text {
      text-align: start;
      color: var(--primary-color);
      p {
        font-family: sub-header-font;
        font-size: 12.5px;
        opacity: 0.75;
      }
      h2 {
        font-family: header-font;
        font-size: 20px;
      }
    }
  }
}
</style>