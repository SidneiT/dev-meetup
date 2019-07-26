<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="info mb-2" v-for="meetup in meetups" :key="meetup.id">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media :src="meetup.src" height="130px" />
              </v-flex>
              <v-flex xs7 sm8 md3>
                <v-card-title primary-title>
                  <h3 class="white--text mb-0">{{meetup.title}}</h3>
                  <div>{{meetup.date}}</div>
                </v-card-title>
                <v-card-action>
                  <v-btn flat :to="`/meetup/${meetup.id}`">
                    <v-icon left light>mdi-arrow-right</v-icon>View Meetup
                  </v-btn>
                </v-card-action>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    }
  }
};
</script>

<style>
</style>
