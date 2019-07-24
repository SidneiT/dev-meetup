<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h3 class="primary--text">Meetup São Paulo</h3>
          </v-card-title>
          <v-card-media
            src="https://s3.amazonaws.com/bucket-gw-cni-static-cms-si/portaldaindustria/noticias/media/imagem_plugin/sopaulo_Ed2fQ4p.jpg"
            height="400px"
          />
          <v-card-text>
            <div class="info--text">17th July - Where it takes place</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi itaque vero deserunt cum mollitia qui et natus odio maiores placeat repellat repellendus unde, exercitationem, quibusdam dolor quo asperiores nobis incidunt.</div>
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
export default {};
</script>

<style>
</style>
