// OpenMarketplace fixtures on server startup

import { Meteor } from 'meteor/meteor'
import { SyncedCron } from 'meteor/percolatestudio:synced-cron'

Meteor.startup(() => {
  if (typeof SyncedCron !== 'undefined') {
    SyncedCron.start()
  }
})
