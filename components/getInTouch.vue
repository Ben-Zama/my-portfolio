<template>
    <div class="git">

        <div class="image">
            <img src="@/assets/images/contact.svg" alt="">
        </div>

        <div class="text">
            <h2>Have a project or Idea in mind?</h2>
            <p>I would be more than pleased to bring it to life.</p>
            <a href="mailto:benzamasimon@gmail.com" target="_blank"><button>Contact Me</button></a>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.git {
    margin: 50px 0;
    padding: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    background-color: var(--accent-color);

    .image {
        width: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    
    .text {
        display: flex;
        flex-direction: column;
        gap: 15px;
        text-align: center;
        color: var(--secondary-color);
        h2 {
            font-family: sub-header-font;
            padding: 10px;
        }
        p {
            font-family: body-font;
            font-size: 17.5px;
        }
        button {
           background-color: var(--secondary-color);
           font-family: sub-header-font;
           color: var(--primary-color);
           padding: 10px 20px;
           border-radius: 10px;
           cursor: pointer;
           transition: backround-color .3s, transform .3s;
           &:hover {
            background-color: var(--primary-color);
            color: var(--secondary-color);
            transform: scale(1.1)
           }
        }

    }
}

@include respond-between(sm, highest) {
    .git {
        flex-direction: row;
        justify-content: space-between;
        .image {
            width: 45%;
        }
        .text {
            width: 45%;
        }
    }
}

@include respond-between(lg, highest) {
    .git {
        justify-content: center;
        .image {
            width: 30%;
        }
        .text {
            width: 30%;
        }
    }
}

</style>