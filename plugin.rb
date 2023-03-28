
# name: kune-discourse-basecomponent

# Extend CSP accepted origins via the Plugin
extend_content_security_policy(
  script_src: ['https://empowercdn.com/', 'https://kune.co/','https://flow.kune.co/','https://myflow.kune.co/']
)
