<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h3 class="primary--text">{{meetup.title}}</h3>
          </v-card-title>
          <v-card-media :src="meetup.src" height="400px" />
          <v-card-text>
            <div class="info--text mb-1">{{meetup.date}} - Where it takes place</div>
            <div>{{meetup.description}}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn to="/meetup/asdfasdfas/register" class="primary" dark>
              <v-icon left>mdi-arrow-right</v-icon>Register
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    }
  }
};
</script>

<style>
</style>
