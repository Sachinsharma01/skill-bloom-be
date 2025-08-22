# Skill Bloom Backend File Structure

This document outlines the file structure of the Skill Bloom backend application.

```
.
├── jest.config.js
├── LICENSE
├── nodemon.json
├── package-lock.json
├── package.json
├── README.md
├── src
│   ├── api
│   │   ├── admin
│   │   │   ├── controller.ts
│   │   │   └── index.ts
│   │   ├── auth
│   │   │   ├── controller.ts
│   │   │   ├── index.ts
│   │   │   └── validator.ts
│   │   ├── dashboard
│   │   │   ├── controller.ts
│   │   │   ├── index.ts
│   │   │   └── portfolio
│   │   │       ├── controller.ts
│   │   │       ├── index.ts
│   │   │       └── validator.ts
│   │   ├── orders
│   │   │   ├── controller.ts
│   │   │   ├── index.ts
│   │   │   └── validator.ts
│   │   ├── public
│   │   │   ├── controller.ts
│   │   │   └── routes.ts
│   │   └── user
│   │       ├── controller.ts
│   │       ├── index.ts
│   │       └── validator.ts
│   ├── config
│   │   ├── index.ts
│   │   └── sequelize-cli.js
│   ├── csv
│   │   ├── top_chennai_startups.csv
│   │   ├── top_companies_in_noida.csv
│   │   ├── top_hyderabad_startups.csv
│   │   ├── top_mnc_in_india.csv
│   │   └── top_product_companies_in_india.csv
│   ├── database
│   │   ├── index.ts
│   │   ├── migrations
│   │   │   └── 20241025023422-create-user.js
│   │   ├── models
│   │   │   ├── course.ts
│   │   │   ├── featured.ts
│   │   │   ├── orders.ts
│   │   │   ├── resourceData.ts
│   │   │   ├── statistics.ts
│   │   │   ├── user.ts
│   │   │   ├── userCourseMapping.ts
│   │   │   └── userCourseRating.ts
│   │   ├── seeders
│   │   │   ├── 20250430185020-add-courses.js
│   │   │   ├── 20250430191149-add-featured-courses.js
│   │   │   └── 20250504112948-add-resource-data.js
│   │   └── sql
│   │       └── v1
│   │           ├── 1744720113_create_table_users.sql
│   │           ├── 1745012899_create_table_statistics.sql
│   │           ├── 1746038236_create_table_courses.sql
│   │           ├── 1746038240_create_table_featured.sql
│   │           ├── 1746038250_create_table_user_course_mappings.sql
│   │           ├── 1746126266_create_table_orders.sql
│   │           ├── 1746353862_create_table_resource_data.sql
│   │           └── 1748116283_create_table_user_course_rating.sql
│   ├── docs
│   │   ├── auth.yaml
│   │   ├── dashboard.yml
│   │   ├── orders.yaml
│   │   ├── schema
│   │   │   ├── auth.schema.yaml
│   │   │   └── user.schema.yaml
│   │   └── user.yaml
│   ├── interactors
│   │   ├── courseInteractor.ts
│   │   ├── featuredInteractor.ts
│   │   ├── ordersInteractor.ts
│   │   ├── resourceDataInteractor.ts
│   │   ├── statisticsInteractor.ts
│   │   ├── userCourseMapppingInteractor.ts
│   │   ├── userCourseRatingInteractor.ts
│   │   └── userInteractor.ts
│   ├── interfaces
│   │   ├── common.ts
│   │   ├── course.ts
│   │   ├── featured.ts
│   │   ├── orders.ts
│   │   ├── resourceData.ts
│   │   ├── statistics.ts
│   │   ├── user.ts
│   │   └── userCourseMapping.ts
│   ├── learning
│   │   └── resource.md
│   ├── middlewares
│   │   ├── auth.ts
│   │   ├── index.ts
│   │   ├── jwt.service.ts
│   │   └── validate-request.ts
│   ├── mongo
│   │   ├── db
│   │   │   └── index.ts
│   │   ├── interactors
│   │   │   └── portfolioInteractor.ts
│   │   └── models
│   │       ├── index.ts
│   │       └── portfolio.ts
│   ├── routes
│   │   ├── routes.ts
│   │   └── validate.ts
│   ├── server.ts
│   ├── services
│   │   ├── auth.ts
│   │   ├── dashboard.ts
│   │   ├── orders.ts
│   │   ├── public.ts
│   │   ├── razorpay.ts
│   │   └── user.ts
│   ├── static
│   │   ├── courses.json
│   │   ├── featured_courses.json
│   │   └── resource_data.json
│   ├── types
│   │   └── express
│   │       └── index.d.ts
│   ├── utils
│   │   ├── apiResponse.ts
│   │   ├── constants.ts
│   │   ├── custom-error.ts
│   │   ├── error-handler.ts
│   │   ├── generalUtils.ts
│   │   ├── logger.ts
│   │   ├── scrapper.ts
│   │   └── swagger.ts
│   └── validations
│       └── auth.validation.ts
├── tests
│   ├── middleware
│   │   ├── auth.middleware.test.ts
│   │   └── jwt.service.test.ts
│   └── modules
│       ├── auth
│       │   ├── auth.controller.test.ts
│       │   └── auth.service.test.ts
│       └── user
│           ├── user.controller.test.ts
│           └── user.service.test.ts
└── tsconfig.json
```
