<template>
  <v-container fluid>
    <div>
      <v-subheader
        id="media_identifier"
        class="media_identifier"
        v-if="this.$route.params.media == 'movie'"
      >
        Trending {{ this.$route.params.media }}s
      </v-subheader>
      <v-subheader
        class="media_identifier"
        v-else-if="this.$route.params.media == 'tv'"
      >
        Trending {{ this.$route.params.media }} series
      </v-subheader>
    </div>
    <v-subheader class="section_identifier">Trending this week</v-subheader>
    <v-row justify="center" class="ma-0 pa-0 pt-1">
      <Card v-for="(item, i) in week.results" :key="i" :items="item" />
    </v-row>
    <v-subheader class="section_identifier">Trending today</v-subheader>
    <v-row justify="center" class="ma-1 pt-1">
      <Card v-for="(item, i) in today.results" :key="i" :items="item" />
    </v-row>
  </v-container>
</template>

<script>
import Card from '../../../components/Card'
import { fetchTrending } from '../../../tmdb/tmdb'
export default {
  components: {
    Card
  },
  data() {
    return {
      // media: this.$route.params.media,
    }
  },
  async asyncData({ params, error }) {
    try {
      const week = await fetchTrending(params.media, 'week')
      const today = await fetchTrending(params.media, 'day')

      return { week, today }
    } catch {
      error({ message: 'Data cannot be accessed!' })
    }
  }
}
</script>

<style>
.media_identifier {
  font-size: 30px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #4527a0 !important;
}

.section_identifier {
  font-size: 25px;
  font-weight: 700;
  margin-bottom: -15px;
  margin-left: 20px;
  color: black !important;
}
</style>
