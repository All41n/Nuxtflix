import Vue from "vue"
import moment from 'moment'

Vue.filter('formatYear', function (date) {
    if (!date) return ''
    return date.slice(0, 4)
})

Vue.filter('formatDOB', function(dob){
    if(!dob) return ''
    return moment(String(dob)).format('DD/MM/YYYY')
})

Vue.filter('formatRuntime', function(runtime){
    if(!runtime) return ''
    var hours = Math.floor(runtime / 60);
    var minutes = runtime % 60;
    return hours + "h" + " " +minutes + "mins";
})
