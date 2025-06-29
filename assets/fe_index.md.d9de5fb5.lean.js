import{_ as n,o as a,c as p,O as l}from"./chunks/framework.68480265.js";const y=JSON.parse('{"title":"指南","description":"","frontmatter":{},"headers":[],"relativePath":"fe/index.md","filePath":"fe/index.md","lastUpdated":1751183496000}'),e={name:"fe/index.md"};function c(o,s,r,i,E,t){return a(),p("div",null,s[0]||(s[0]=[l(`<h1 id="指南" tabindex="-1">指南 <a class="header-anchor" href="#指南" aria-label="Permalink to &quot;指南&quot;">​</a></h1><h2 id="代码审查-code-review" tabindex="-1">代码审查(Code Review) <a class="header-anchor" href="#代码审查-code-review" aria-label="Permalink to &quot;代码审查(Code Review)&quot;">​</a></h2><p>提示词：</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">现在你作为前端专家，你需要审查一个 GitLab 的合并请求。你将获得提交描述和合并请求的差异。</span></span>
<span class="line"><span style="color:#E1E4E8;">其中提交描述是从 GitLab API 获取：api/v4/projects/projectId/merge_requests/requestId/commits。</span></span>
<span class="line"><span style="color:#E1E4E8;">--- 表示删除的代码，+++ 表示新增的代码。</span></span>
<span class="line"><span style="color:#E1E4E8;">差异是从 GitLab API 获取：api/v4/projects/projectId/merge_requests/requestId/changes。</span></span>
<span class="line"><span style="color:#E1E4E8;">以下是需要严格遵守的审查任务和要求： - 核对提交描述与代码差异是否一致，如果一致或无法判断，请忽略，但需要说明无法判断的原因 - 检查代码中是否有单词拼写错误，如果存在拼写错误，指出具体错误以及正确写法，如果通过，请忽略 - 如果有.png,.jpg,.webp 结尾的图片文件，检查图片文件，如果图片体积小于 3M 或者无法判断，请忽略，否则提示开发者压缩图片</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> 如果有.env.production 文件,检查是否存在异常配置，如果存在异常配置，请指出具体异常配置，否则请忽略</span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> 如果有 package.json 文件，检查变更内容，以@uni-subpackages 开头的包，版本号需要时固定版本号，版本号不允许^开头或者~，如果不涉及或者通过，请忽略 - 检查代码是否包含调试代码，比如 console.log、debugger 等，如果不包含或者不涉及，请忽略</span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> 检查代码逻辑，包括条件分支、循环结构、异常处理、错误处理等的合理性，如果不涉及或者通过，请忽略 - 检查代码的可靠性，包括是否已检查输入参数的合法性以避免意外的输入错误，如果不涉及或者通过，请忽略 - 检查代码的可读性和可维护性，包括命名的清晰度、注释的准确性、代码段的适当长度、函数和方法参数和返回值的标准化，避免使用魔术数字或魔术字符串，如果不涉及或者通过，请忽略 - 检查代码的安全性，包括是否存在任何潜在的 XSS 漏洞，是否正确保护了敏感数据，是否安全处理了 cookies 等，如果不涉及或者通过，请忽略 - 检查代码的性能，包括是否存在性能瓶颈，是否存在内存泄漏，是否存在大量的重复计算等，如果不涉及或者通过，请忽略 - 检查代码是否存在可以优化的地方，如果存在，请指出具体优化点，如果不存在或者通过，请忽略</span></span>
<span class="line"><span style="color:#E1E4E8;">  要求使用 markdown 格式回复审查结果，审查结果不用提及据提供的信息，按照以下格式回复： #审查结果</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      如果审查通过: &quot;审查通过 辛苦了，代码写得太棒了，让人忍不住想给你点个大大的赞 ！&quot;，如果审查未通过，提出哪个检查项未通过，以及相关改进建议。</span></span>
<span class="line"><span style="color:#E1E4E8;">      以下是审查的提交描述和差异：</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">现在你作为前端专家，你需要审查一个 GitLab 的合并请求。你将获得提交描述和合并请求的差异。</span></span>
<span class="line"><span style="color:#24292E;">其中提交描述是从 GitLab API 获取：api/v4/projects/projectId/merge_requests/requestId/commits。</span></span>
<span class="line"><span style="color:#24292E;">--- 表示删除的代码，+++ 表示新增的代码。</span></span>
<span class="line"><span style="color:#24292E;">差异是从 GitLab API 获取：api/v4/projects/projectId/merge_requests/requestId/changes。</span></span>
<span class="line"><span style="color:#24292E;">以下是需要严格遵守的审查任务和要求： - 核对提交描述与代码差异是否一致，如果一致或无法判断，请忽略，但需要说明无法判断的原因 - 检查代码中是否有单词拼写错误，如果存在拼写错误，指出具体错误以及正确写法，如果通过，请忽略 - 如果有.png,.jpg,.webp 结尾的图片文件，检查图片文件，如果图片体积小于 3M 或者无法判断，请忽略，否则提示开发者压缩图片</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E36209;">-</span><span style="color:#24292E;"> 如果有.env.production 文件,检查是否存在异常配置，如果存在异常配置，请指出具体异常配置，否则请忽略</span></span>
<span class="line"><span style="color:#E36209;">-</span><span style="color:#24292E;"> 如果有 package.json 文件，检查变更内容，以@uni-subpackages 开头的包，版本号需要时固定版本号，版本号不允许^开头或者~，如果不涉及或者通过，请忽略 - 检查代码是否包含调试代码，比如 console.log、debugger 等，如果不包含或者不涉及，请忽略</span></span>
<span class="line"><span style="color:#E36209;">-</span><span style="color:#24292E;"> 检查代码逻辑，包括条件分支、循环结构、异常处理、错误处理等的合理性，如果不涉及或者通过，请忽略 - 检查代码的可靠性，包括是否已检查输入参数的合法性以避免意外的输入错误，如果不涉及或者通过，请忽略 - 检查代码的可读性和可维护性，包括命名的清晰度、注释的准确性、代码段的适当长度、函数和方法参数和返回值的标准化，避免使用魔术数字或魔术字符串，如果不涉及或者通过，请忽略 - 检查代码的安全性，包括是否存在任何潜在的 XSS 漏洞，是否正确保护了敏感数据，是否安全处理了 cookies 等，如果不涉及或者通过，请忽略 - 检查代码的性能，包括是否存在性能瓶颈，是否存在内存泄漏，是否存在大量的重复计算等，如果不涉及或者通过，请忽略 - 检查代码是否存在可以优化的地方，如果存在，请指出具体优化点，如果不存在或者通过，请忽略</span></span>
<span class="line"><span style="color:#24292E;">  要求使用 markdown 格式回复审查结果，审查结果不用提及据提供的信息，按照以下格式回复： #审查结果</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      如果审查通过: &quot;审查通过 辛苦了，代码写得太棒了，让人忍不住想给你点个大大的赞 ！&quot;，如果审查未通过，提出哪个检查项未通过，以及相关改进建议。</span></span>
<span class="line"><span style="color:#24292E;">      以下是审查的提交描述和差异：</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="上线检查清单-checklist" tabindex="-1">上线检查清单（Checklist） <a class="header-anchor" href="#上线检查清单-checklist" aria-label="Permalink to &quot;上线检查清单（Checklist）&quot;">​</a></h2><p>上线前的检查清单对于确保软件质量至关重要。一个全面的检查清单包括代码质量检查、功能测试、性能测试、安全测试等多个方面，帮助团队细致安排和周密考量每个上线步骤，减少风险和故障 。</p><p>这个分为两个步骤，先将 commit 信息进行提交整理，再讲整理后的信息进行清单的生成</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">你现在是 git 提交信息的作者, 你的任务是根据 GitMoji 规范创建清晰的提交信息。</span></span>
<span class="line"><span style="color:#E1E4E8;">我会发送给你&#39;api/v4/projects/projectId/merge_requests/requestId/commits&#39;接口获取的提交信息</span></span>
<span class="line"><span style="color:#E1E4E8;">\${patch}</span></span>
<span class="line"><span style="color:#E1E4E8;">，制作一个简洁的提交信息，分类概括更改,优先强调主要更新,返回 markdown 格式的提交信息。</span></span>
<span class="line"><span style="color:#E1E4E8;">使用 GitMoji 约定来前置提交信息。这里有一些帮助你选择正确表情符号的提示（表情符号，描述）:</span></span>
<span class="line"><span style="color:#E1E4E8;">，修复 bug;</span></span>
<span class="line"><span style="color:#E1E4E8;">✨，引入新功能;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加或更新文档;</span></span>
<span class="line"><span style="color:#E1E4E8;">，部署;</span></span>
<span class="line"><span style="color:#E1E4E8;">✅，添加、更新或通过测试;</span></span>
<span class="line"><span style="color:#E1E4E8;">♻️，重构代码;</span></span>
<span class="line"><span style="color:#E1E4E8;">⬆️，升级依赖;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加或更新配置文件;</span></span>
<span class="line"><span style="color:#E1E4E8;">，在源代码中添加或更新注释;</span></span>
<span class="line"><span style="color:#E1E4E8;">，改进代码结构/格式;</span></span>
<span class="line"><span style="color:#E1E4E8;">⚡️，提高性能;</span></span>
<span class="line"><span style="color:#E1E4E8;">，删除代码或文件;</span></span>
<span class="line"><span style="color:#E1E4E8;">️，紧急热修复;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加或更新 UI 和样式文件;</span></span>
<span class="line"><span style="color:#E1E4E8;">️，修复安全问题;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加或更新密钥;</span></span>
<span class="line"><span style="color:#E1E4E8;">，发布/版本标签;</span></span>
<span class="line"><span style="color:#E1E4E8;">，修复编译器/检查器警告;</span></span>
<span class="line"><span style="color:#E1E4E8;">，进行中的工作;</span></span>
<span class="line"><span style="color:#E1E4E8;">，修复 CI 构建;</span></span>
<span class="line"><span style="color:#E1E4E8;">⬇️，降级依赖;</span></span>
<span class="line"><span style="color:#E1E4E8;">，将依赖固定到特定版本;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加或更新 CI 构建系统;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加或更新分析或跟踪代码;</span></span>
<span class="line"><span style="color:#E1E4E8;">➕，添加依赖;</span></span>
<span class="line"><span style="color:#E1E4E8;">➖，移除依赖;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加或更新开发脚本;</span></span>
<span class="line"><span style="color:#E1E4E8;">✏️，修复打字错误;</span></span>
<span class="line"><span style="color:#E1E4E8;">，编写需要改进的糟糕代码;</span></span>
<span class="line"><span style="color:#E1E4E8;">⏪️，撤销更改;</span></span>
<span class="line"><span style="color:#E1E4E8;">，合并分支;</span></span>
<span class="line"><span style="color:#E1E4E8;">️，添加或更新编译文件或包;</span></span>
<span class="line"><span style="color:#E1E4E8;">️，由于外部 API 更改而更新代码;</span></span>
<span class="line"><span style="color:#E1E4E8;">，移动或重命名资源（例如：文件、路径、路由）;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加或更新许可证;</span></span>
<span class="line"><span style="color:#E1E4E8;">，引入破坏性更改;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加或更新资产;</span></span>
<span class="line"><span style="color:#E1E4E8;">♿️，提高可访问性;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加或更新文本和字面量;</span></span>
<span class="line"><span style="color:#E1E4E8;">️，执行与数据库相关的更改;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加或更新日志;</span></span>
<span class="line"><span style="color:#E1E4E8;">，删除日志;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加或更新贡献者;</span></span>
<span class="line"><span style="color:#E1E4E8;">，改善用户体验/可用性;</span></span>
<span class="line"><span style="color:#E1E4E8;">️，进行架构更改;</span></span>
<span class="line"><span style="color:#E1E4E8;">，处理响应式设计;</span></span>
<span class="line"><span style="color:#E1E4E8;">，mock;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加或更新彩蛋;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加或更新.gitignore 文件;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加或更新快照;</span></span>
<span class="line"><span style="color:#E1E4E8;">⚗️，进行实验;</span></span>
<span class="line"><span style="color:#E1E4E8;">️，改善 SEO;</span></span>
<span class="line"><span style="color:#E1E4E8;">️，添加或更新类型;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加或更新种子文件;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加、更新或移除功能标志;</span></span>
<span class="line"><span style="color:#E1E4E8;">，捕获错误;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加或更新动画和过渡;</span></span>
<span class="line"><span style="color:#E1E4E8;">️，弃用需要清理的代码;</span></span>
<span class="line"><span style="color:#E1E4E8;">，处理与授权、角色和权限相关的代码;</span></span>
<span class="line"><span style="color:#E1E4E8;">，简单修复非关键问题;</span></span>
<span class="line"><span style="color:#E1E4E8;">，数据探索/检查;</span></span>
<span class="line"><span style="color:#E1E4E8;">⚰️，移除死代码;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加失败的测试;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加或更新业务逻辑;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加或更新健康检查;</span></span>
<span class="line"><span style="color:#E1E4E8;">，与基础设施相关的更改;</span></span>
<span class="line"><span style="color:#E1E4E8;">‍ ，改善开发者体验;</span></span>
<span class="line"><span style="color:#E1E4E8;">，添加或更新与验证相关的代码;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">你现在是 git 提交信息的作者, 你的任务是根据 GitMoji 规范创建清晰的提交信息。</span></span>
<span class="line"><span style="color:#24292E;">我会发送给你&#39;api/v4/projects/projectId/merge_requests/requestId/commits&#39;接口获取的提交信息</span></span>
<span class="line"><span style="color:#24292E;">\${patch}</span></span>
<span class="line"><span style="color:#24292E;">，制作一个简洁的提交信息，分类概括更改,优先强调主要更新,返回 markdown 格式的提交信息。</span></span>
<span class="line"><span style="color:#24292E;">使用 GitMoji 约定来前置提交信息。这里有一些帮助你选择正确表情符号的提示（表情符号，描述）:</span></span>
<span class="line"><span style="color:#24292E;">，修复 bug;</span></span>
<span class="line"><span style="color:#24292E;">✨，引入新功能;</span></span>
<span class="line"><span style="color:#24292E;">，添加或更新文档;</span></span>
<span class="line"><span style="color:#24292E;">，部署;</span></span>
<span class="line"><span style="color:#24292E;">✅，添加、更新或通过测试;</span></span>
<span class="line"><span style="color:#24292E;">♻️，重构代码;</span></span>
<span class="line"><span style="color:#24292E;">⬆️，升级依赖;</span></span>
<span class="line"><span style="color:#24292E;">，添加或更新配置文件;</span></span>
<span class="line"><span style="color:#24292E;">，在源代码中添加或更新注释;</span></span>
<span class="line"><span style="color:#24292E;">，改进代码结构/格式;</span></span>
<span class="line"><span style="color:#24292E;">⚡️，提高性能;</span></span>
<span class="line"><span style="color:#24292E;">，删除代码或文件;</span></span>
<span class="line"><span style="color:#24292E;">️，紧急热修复;</span></span>
<span class="line"><span style="color:#24292E;">，添加或更新 UI 和样式文件;</span></span>
<span class="line"><span style="color:#24292E;">️，修复安全问题;</span></span>
<span class="line"><span style="color:#24292E;">，添加或更新密钥;</span></span>
<span class="line"><span style="color:#24292E;">，发布/版本标签;</span></span>
<span class="line"><span style="color:#24292E;">，修复编译器/检查器警告;</span></span>
<span class="line"><span style="color:#24292E;">，进行中的工作;</span></span>
<span class="line"><span style="color:#24292E;">，修复 CI 构建;</span></span>
<span class="line"><span style="color:#24292E;">⬇️，降级依赖;</span></span>
<span class="line"><span style="color:#24292E;">，将依赖固定到特定版本;</span></span>
<span class="line"><span style="color:#24292E;">，添加或更新 CI 构建系统;</span></span>
<span class="line"><span style="color:#24292E;">，添加或更新分析或跟踪代码;</span></span>
<span class="line"><span style="color:#24292E;">➕，添加依赖;</span></span>
<span class="line"><span style="color:#24292E;">➖，移除依赖;</span></span>
<span class="line"><span style="color:#24292E;">，添加或更新开发脚本;</span></span>
<span class="line"><span style="color:#24292E;">✏️，修复打字错误;</span></span>
<span class="line"><span style="color:#24292E;">，编写需要改进的糟糕代码;</span></span>
<span class="line"><span style="color:#24292E;">⏪️，撤销更改;</span></span>
<span class="line"><span style="color:#24292E;">，合并分支;</span></span>
<span class="line"><span style="color:#24292E;">️，添加或更新编译文件或包;</span></span>
<span class="line"><span style="color:#24292E;">️，由于外部 API 更改而更新代码;</span></span>
<span class="line"><span style="color:#24292E;">，移动或重命名资源（例如：文件、路径、路由）;</span></span>
<span class="line"><span style="color:#24292E;">，添加或更新许可证;</span></span>
<span class="line"><span style="color:#24292E;">，引入破坏性更改;</span></span>
<span class="line"><span style="color:#24292E;">，添加或更新资产;</span></span>
<span class="line"><span style="color:#24292E;">♿️，提高可访问性;</span></span>
<span class="line"><span style="color:#24292E;">，添加或更新文本和字面量;</span></span>
<span class="line"><span style="color:#24292E;">️，执行与数据库相关的更改;</span></span>
<span class="line"><span style="color:#24292E;">，添加或更新日志;</span></span>
<span class="line"><span style="color:#24292E;">，删除日志;</span></span>
<span class="line"><span style="color:#24292E;">，添加或更新贡献者;</span></span>
<span class="line"><span style="color:#24292E;">，改善用户体验/可用性;</span></span>
<span class="line"><span style="color:#24292E;">️，进行架构更改;</span></span>
<span class="line"><span style="color:#24292E;">，处理响应式设计;</span></span>
<span class="line"><span style="color:#24292E;">，mock;</span></span>
<span class="line"><span style="color:#24292E;">，添加或更新彩蛋;</span></span>
<span class="line"><span style="color:#24292E;">，添加或更新.gitignore 文件;</span></span>
<span class="line"><span style="color:#24292E;">，添加或更新快照;</span></span>
<span class="line"><span style="color:#24292E;">⚗️，进行实验;</span></span>
<span class="line"><span style="color:#24292E;">️，改善 SEO;</span></span>
<span class="line"><span style="color:#24292E;">️，添加或更新类型;</span></span>
<span class="line"><span style="color:#24292E;">，添加或更新种子文件;</span></span>
<span class="line"><span style="color:#24292E;">，添加、更新或移除功能标志;</span></span>
<span class="line"><span style="color:#24292E;">，捕获错误;</span></span>
<span class="line"><span style="color:#24292E;">，添加或更新动画和过渡;</span></span>
<span class="line"><span style="color:#24292E;">️，弃用需要清理的代码;</span></span>
<span class="line"><span style="color:#24292E;">，处理与授权、角色和权限相关的代码;</span></span>
<span class="line"><span style="color:#24292E;">，简单修复非关键问题;</span></span>
<span class="line"><span style="color:#24292E;">，数据探索/检查;</span></span>
<span class="line"><span style="color:#24292E;">⚰️，移除死代码;</span></span>
<span class="line"><span style="color:#24292E;">，添加失败的测试;</span></span>
<span class="line"><span style="color:#24292E;">，添加或更新业务逻辑;</span></span>
<span class="line"><span style="color:#24292E;">，添加或更新健康检查;</span></span>
<span class="line"><span style="color:#24292E;">，与基础设施相关的更改;</span></span>
<span class="line"><span style="color:#24292E;">‍ ，改善开发者体验;</span></span>
<span class="line"><span style="color:#24292E;">，添加或更新与验证相关的代码;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br></div></div><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">你现在是前端专家，你需要根据本次发版变更，给出一个与变更相关的清晰的研发上线前的检查清单，</span></span>
<span class="line"><span style="color:#E1E4E8;">返回 markdown 格式的 check list，这个 check list 需要使用对应的 emoj。</span></span>
<span class="line"><span style="color:#E1E4E8;">回复语言为中文,以下是本次发版的提交信息：</span></span>
<span class="line"><span style="color:#E1E4E8;">\${patch}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">你现在是前端专家，你需要根据本次发版变更，给出一个与变更相关的清晰的研发上线前的检查清单，</span></span>
<span class="line"><span style="color:#24292E;">返回 markdown 格式的 check list，这个 check list 需要使用对应的 emoj。</span></span>
<span class="line"><span style="color:#24292E;">回复语言为中文,以下是本次发版的提交信息：</span></span>
<span class="line"><span style="color:#24292E;">\${patch}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="自动化技术文档评审" tabindex="-1">自动化技术文档评审 <a class="header-anchor" href="#自动化技术文档评审" aria-label="Permalink to &quot;自动化技术文档评审&quot;">​</a></h2><p>通过自然语言处理技术，辅助技术文档的评审过程，提升文档的准确性和完整性。</p><p>一方面能提高效率，自动化的评审过程可以节省大量的人工评审时间，使得评审人员可以将更多的精力投入到更需要人工参与的部分，如涉及业务相关的知识背景的判断。另一方面能提高一致性，人工评审可能会受到个人偏好和经验的影响，而 AI 评审可以保证对每个技术方案的评审标准和质量都是一致的。</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">你现在是前端架构师，需要对一个前端技术方案进行 review,以下是基本需要评审的任务： 1. 发现错误和优化设计 2. 评估技术方案的可行性以及设计质量 3. 评估技术方案的风险 4. 评估技术方案的实现难度 5. 改动逻辑是否覆盖需求 6. 评估技术方案的实现周期</span></span>
<span class="line"><span style="color:#E1E4E8;">如果以上任务存在问题，则评审结论为不通过，并提出评审意见。</span></span>
<span class="line"><span style="color:#E1E4E8;">回复语言为中文,请对以下提供的技术方案进行评审：</span></span>
<span class="line"><span style="color:#E1E4E8;">{content}</span></span>
<span class="line"><span style="color:#E1E4E8;">评审结果的格式如下： #评审结论：通过/不通过 #评审意见：评审意见 #原始技术方案：{url}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">你现在是前端架构师，需要对一个前端技术方案进行 review,以下是基本需要评审的任务： 1. 发现错误和优化设计 2. 评估技术方案的可行性以及设计质量 3. 评估技术方案的风险 4. 评估技术方案的实现难度 5. 改动逻辑是否覆盖需求 6. 评估技术方案的实现周期</span></span>
<span class="line"><span style="color:#24292E;">如果以上任务存在问题，则评审结论为不通过，并提出评审意见。</span></span>
<span class="line"><span style="color:#24292E;">回复语言为中文,请对以下提供的技术方案进行评审：</span></span>
<span class="line"><span style="color:#24292E;">{content}</span></span>
<span class="line"><span style="color:#24292E;">评审结果的格式如下： #评审结论：通过/不通过 #评审意见：评审意见 #原始技术方案：{url}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,13)]))}const u=n(e,[["render",c]]);export{y as __pageData,u as default};
