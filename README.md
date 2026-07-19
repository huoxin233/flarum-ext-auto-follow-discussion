# Auto Follow Discussion

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/huoxin/auto-follow-discussion.svg)](https://packagist.org/packages/huoxin/auto-follow-discussion) [![Total Downloads](https://img.shields.io/packagist/dt/huoxin/auto-follow-discussion.svg)](https://packagist.org/packages/huoxin/auto-follow-discussion)

> [!WARNING]
> **Minimal Maintenance Notice:** This extension is now under minimal maintenance. The original flagship feature ("Automatically follow discussions I created") has been merged natively into the Flarum 2.0 core subscriptions extension. This extension now only provides the "Automatically follow discussions I read" feature (which I don't know what can it be used for).
>
> **维护通知：** 本扩展现处于最低限度维护状态。其最初的核心功能（“自动关注我创建的主题”）已被合并进 Flarum 2.0 的 Subscriptions 扩展中。目前本扩展仅提供“自动关注我读过的主题”功能（我也不知道有什么用）。

A [Flarum](http://flarum.org) extension that builds on [Flarum Subscriptions](https://github.com/flarum/subscriptions).

一个 [Flarum](http://flarum.org) 扩展，基于 [Flarum Subscriptions](https://github.com/flarum/subscriptions)。

## Features

- ~~Allow users to automatically follow the discussions they created（允许用户自动关注他们创建的主题）~~ _(Merged into Flarum 2.0 Core)_

- Allow users to automatically follow the discussions they read（允许用户自动关注他们读过的主题）

## Screenshots

<img src="https://github.com/huoxin233/flarum-ext-auto-follow-discussion/assets/23447157/d1fbf7f3-ce53-477f-98ed-bec9a0c57d52" width="800">

<img src="https://github.com/huoxin233/flarum-ext-auto-follow-discussion/assets/23447157/58c0e73d-19e2-4379-8b77-3b7047a67b02" width="800">

## Installation

Install with composer:

```sh
composer require huoxin/auto-follow-discussion:"*"
```

## Updating

```sh
composer update huoxin/auto-follow-discussion:"*"
php flarum migrate
php flarum cache:clear
```

## Links

- [Packagist](https://packagist.org/packages/huoxin/auto-follow-discussion)
- [GitHub](https://github.com/huoxin233/flarum-ext-auto-follow-discussion)
- [Discuss](https://discuss.flarum.org/d/34680)
