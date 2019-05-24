# GreggW's site

## deployment
The `master` branch is only a static folder from which the production site is hosted. Because this is a "user/organization" github page, using the `master` branch is unfortunately required. `production` should act as the source of truth for the repo. Branches should be made off of `production` and only content ready for production should be merged into `production`

To deploy once changes have been merged to `production`, run the `yarn deploy` command from the `production` branch. This command creates a new static build and force pushes only the static folder to the master branch.
