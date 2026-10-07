import { repos } from './socialLinks'
// liveUrl: set to a real URL to show a "Live Demo" button. Left null: no live demo is known.
export const projects = [
  {
    title: 'Business Management System',
    icon: 'server',
    description: 'A Java and Spring business management application backed by MySQL, delivered through a cloud-native toolchain on AWS.',
    features: [
      'Containerized with Docker',
      'Kubernetes deployment packaged with Helm',
      'GitOps delivery using ArgoCD',
      'AWS infrastructure provisioned with Terraform',
      'CI/CD pipelines in GitHub Actions',
    ],
    tech: ['Java', 'Spring', 'MySQL', 'Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'Terraform', 'AWS', 'GitHub Actions'],
    repo: repos.businessManagement,
    liveUrl: null,
  },
  {
    title: 'Spring E-Commerce Application',
    icon: 'cart',
    description: 'A server-rendered e-commerce web application built on the Spring MVC stack with a relational MySQL backend.',
    features: [
      'Spring MVC controllers with JSP views',
      'Hibernate ORM persistence on MySQL',
      'Maven build',
      'Containerized with Docker, served by Tomcat',
    ],
    tech: ['Java', 'Spring MVC', 'Hibernate', 'JSP', 'MySQL', 'Maven', 'Docker', 'Tomcat'],
    repo: repos.ecommerce,
    liveUrl: null,
  },
]
