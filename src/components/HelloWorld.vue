<template>
  <div class="container">
    <template v-for="(card, index) in cards">
      <Card class="card" 
            :key="index" 
            @more-info-clicked="btnClicked" 
            @pay-clicked="btnClicked"
            :description="card.description"
            :title="card.title"
            :image="card.image"></Card>
    </template>
  </div>
</template>

<script>
import Card from "./Card";
export default {
  name: "HelloWorld",
  components: {
    Card
  },
  data() {
    return {
      cards: [
        { 
          image: 'https://images.unsplash.com/photo-1472437774355-71ab6752b434',
          title: 'Web Development Books',
          description: `An easy domain to get started on in the path to becoming a successful developer is the web. These books on the fundamentals of designing powerful, thoughtful and innovative websites will kickstart the journey to becoming a full stack developer. HTML and CSS build the layout, design and positioning of elements on a website. Their understanding is vital towards building strong user interfaces that intuitively guide the user through different actions. Javascript and JQuery are essential tools to ensure that the website is responsive and performs user actions. It also acts as a means to connect static websites to other apis, servers and tools allowing the website to perform a wider array of actions`
        },
        {
          image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5',
          title: 'Dorm Fees',
          description: `Most students have the option of living on campus or off campus, typically, off campus locations are cheaper, however, they serve as a disadvantage to students. Living on campus allows the student to maximize their time learning, collaborating with other students, having access to university resources and being able to achieve their potential more easily. The learning and benefits of staying in an on campus dorm outweigh the additional upfront cost associated with it. This is why being able to live on campus is relevant towards the success of a student`
        },
        {
          image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
          title: 'Developer Laptop',
          description: `Being a developer involves coding a lot and being able to manage many resources at the same time. This depends a powerful laptop that can handle the requirements of running intense resources such as code compilation, server management, and hosting emulators. An unsatisfactorily powered device not only hinders a developer’s progress but it also may completely halt their learning and interest to pick up new skills. For this reason, it is necessary to invest in a well powered device that can support the student for many years.`
        },
        {
          image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'On campus meals',
          description: `Being able to get nutritious healthy food is vital to strengthening a student and ensuring that they have the power to work tirelessly. An on campus meal plan will allow the student to spend less time commuting to get food and more time to focus on relevant topics such as academics and participation in activities. It also frees the student from needing to think about where to go or whether they have the sufficient funds to purchase good food. It also reduces the distance and time required to get resources which can be helpful in time crunches or when the student is sick. University food resources are also normally well maintained and regulated to ensure the best quality for students and therefore it is a valid priority towards the student’s success.`
        },
        {
          image: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1',
          title: 'Gym Membership',
          description: `Academics and studying are not the only relevant items during college. It is also important to maintain a fit lifestyle to promote better health and stamina. Being healthy will prevent sickness and allow a student to be more effective in their other pursuits. More over, a membership near the university will allow the student access to high quality resources and equipment that will facilitate faster growth and improvements over time.`
        },
        {
          image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d',
          title: 'Music',
          description: `Music can raise someone’s mood, get them excited, or make them calm and relaxed. Music also - and this is important - allows us to feel nearly or possibly all emotions that we experience in our lives. ... It is an important part of their lives and fills a need or an urge to create music. Performing music involves intense physical coordination in performing an instrument alone or with others, while reading musical notation, and adding delicate or strong nuanced changes to the music that only a performer can bring. In general, to an amateur musician, music can provide an escape from everyday life or an alternative means of expressing one’s own capabilities. Thus, it is important to not neglect the importance of including musical studies for a student in their education.`
        },
        {
          image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d',
          title: 'Sports',
          description: `Taking part in sports is important as it reduces stress and enhances their mood. It builds healthy bones and muscles, increases fitness, improves sleep, helps them socialize, improves their cooperation skills, boosts self-confidence and lowers the risk of getting obese. Sports gives us a good exercise which makes us Physically strong and increases our stamina and strength. Regular Sports activities make us active and lead to good Health. Participation in sports has also been linked towards better grades, talent and GPA. Thus, it is vital that sports are a part of a student’s life.`
        },
        {
          image: 'https://images.unsplash.com/photo-1498079022511-d15614cb1c02',
          title: 'Tuition',
          description: `Tuition is the price of college, which includes classes, food, housing, books and more. Did you know that the rise in tuition is growing faster than inflation. Inflation is how the price of money rises and falls. College costs should not be higher than the price of money in the economy. We think everyone should be able to afford college without regretting it for the rest of their lives because they would have so much student debt. It would be greatly appreciated if you helped pay for college’s high tuition rates. Education is vital towards empowering a student to have a successful life and take better steps. It also allows them to spread their knowledge in the economy by working and applying their knowledge towards the improvement of the economy’s lifestyle.`
        }
      ]
    }
  },
  methods: {
    btnClicked(opts={}) {
      this.$emit('open-modal', opts)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 3%;
}
.card {
  padding-bottom: 15px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
