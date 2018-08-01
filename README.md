# deletePodioSpamEmailComments

A JavaScript cleaning routine for cleaning Podio spam comments sent via the Email to item feature

Super annoying that [Podio](https://podio.com) has weak or nonexisting spam protection, and does not allow disabling this feature per user or altogether for a workspace. The feature in question is the [Email to Item](https://help.podio.com/hc/en-us/articles/201290603-Email-to-item).

## Usage

This is used by

1. Logging in to Podio as the user on whose behalf the email spams are coming in
1. Setting `spamUid` near the top of the program
1. Copy+pasting the whole lot to browser console
1. Waiting
1. Iterating, if there are a lot of spam comments
