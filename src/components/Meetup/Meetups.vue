<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  src="https://s3.amazonaws.com/bucket-gw-cni-static-cms-si/portaldaindustria/noticias/media/imagem_plugin/sopaulo_Ed2fQ4p.jpg"
                  height="130px"
                />
              </v-flex>
              <v-flex xs7 sm8 md3>
                <v-card-title primary-title>
                  <h3 class="white--text">My Meetup</h3>
                  <div>17th July 2017</div>
                </v-card-title>
                <v-card-action>
                  <v-btn flat to="/meetup/dsaffdsafdsa">
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
export default {};
</script>

<style>
</style>
