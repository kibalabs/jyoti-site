terraform {
  required_version = "~> 1.3.3"

  backend "s3" {
    # aws --profile kiba s3 mb s3://kiba-infra-jyoti-website-assets-production
    key = "tf-state.json"
    region = "eu-west-1"
    bucket = "kiba-infra-jyoti-website-assets-production"
    profile = "kiba"
    encrypt = true
  }

  required_providers {
    aws = {
      version = "5.1.0"
    }
  }
}

provider "aws" {
  region = "eu-west-1"
  profile = "kiba"
}

locals {
  project = "jyoti-website-assets"
}
