resource "aws_iam_group" "users" {
  name = "${local.project}-users"
}

resource "aws_iam_group" "readers" {
  name = "${local.project}-readers"
}

resource "aws_iam_user" "strapi" {
  name = "${local.project}-strapi"
  tags = {
    app = local.project
  }
}

output "strapi_name" {
  value = aws_iam_user.strapi.name
  sensitive = false
}

output "strapi_iam_key" {
  value = aws_iam_access_key.strapi.id
  sensitive = true
}

output "strapi_iam_secret" {
  value = aws_iam_access_key.strapi.secret
  sensitive = true
}

resource "aws_iam_access_key" "strapi" {
  user = aws_iam_user.strapi.name
}

resource "aws_iam_user_group_membership" "strapi" {
  user = aws_iam_user.strapi.name

  groups = [
    aws_iam_group.readers.name,
    aws_iam_group.users.name,
  ]
}

resource "aws_iam_group_policy_attachment" "users_read_from_storage" {
  group = aws_iam_group.users.name
  policy_arn = aws_iam_policy.read_from_storage.arn
}

resource "aws_iam_group_policy_attachment" "users_write_to_storage" {
  group = aws_iam_group.users.name
  policy_arn = aws_iam_policy.write_to_storage.arn
}

resource "aws_iam_group_policy_attachment" "readers_read_from_storage" {
  group = aws_iam_group.readers.name
  policy_arn = aws_iam_policy.read_from_storage.arn
}
