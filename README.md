# GreggW's site

## deployment
The `master` branch acts as a static folder from which the production site is hosted. Because this is a "user/organization" github page, using the `master` branch is required. `development` should contain the full directory and only content that's ready to appear on production.

To deploy from the `development` branch, first run `yarn export` to build the static directory. Then push only the static subdirectory `out/` to `master` with the command `git subtree push --prefix out/ origin master`.
