# Taxonomy Builder Overview

Taxonomy Builder lets organizations design and manage their topic hierarchy, so that conversation analysis reflects real business priorities rather than relying solely on machine-generated topic labels.

Contact Center managers, analysts, and quality teams use Taxonomy Builder to define a structured, business-relevant taxonomy. The taxonomy applies consistently across conversations to deliver precise classification, clearer insights, and measurable results.           
<img src="../images/taxonomy-builder-overview.png" alt="Taxonomy Builder" title="Taxonomy Builder" style="border: 1px solid gray; zoom:100%;">  

## Why Taxonomy Builder?

Traditional conversation analytics face real challenges that impact day-to-day operations:

**Inconsistent Labeling**: The same customer issue can appear under multiple labels (for example, card termination, account closure, or service cancellation), making trend analysis unreliable to get accurate counts or trends.

**Generic Topics**: Avoid broad AI-generated labels such as payment issue or service inquiry. Specify the intent (for example, a billing dispute, a payment method update, or a late fee inquiry) so teams can route and resolve the topic correctly.

**Flat Structure**: Real business operations are hierarchical from business lines to product categories to specific issues. Flat topic lists make it hard to analyze at different strategic levels.

## How Does Taxonomy Builder Help?  

Taxonomy Builder enables you to:

* Define custom topic hierarchies that mirror your business structure.

* Make sure consistent labeling across all conversations.

* Analyze topics at strategic (L1), tactical (L2 and Standalone L2), and operational (L3) levels.

* Track resolution rates and sentiment for specific customer contact reasons.

* Visualize topic performance through color-coded indicators based on resolution and sentiment metrics.

## Understanding the Three-Level Hierarchy   

**Level 1 (L1)**: Represents the highest-level business categorization, typically corresponding to major divisions, lines of business, or service areas that align with executive-level thinking and strategic planning. 

**Level 2 (L2)**: Represents specific product categories, service types, or operational areas. L2 topics usually roll up under an L1 topic and support tactical analysis for product and operations teams.

**Standalone Level 2 (L2)**: Represents an L2 topic that doesn't roll up to an L1 topic. Use standalone L2 topics when a category requires independent tracking without a parent business grouping.

**Level 3 (L3)**: Represents specific reasons for customer contact. L3 topics capture the detailed issues that drive daily agent activity and operational decision-making.

## Advanced Features 

**Visual Hierarchy**: The interface uses color-coded levels and progressive indentation to distinguish L1, L2, and L3 topics. This hierarchy helps you understand the structure at a glance:

* Purple indicators for L1 (top-level) topics.

* Blue indicators for L2 (second-level) topics and Standalone L2 topics.

* Grey indicators for L3 (third-level) topics.

**Interactive Guidance**: Tooltips provide contextual help for moving functionality and topic reorganization. Hover over the information icon (ⓘ) to view:

* Allowed topic movements between hierarchy levels.

* Restricted operations that preserve taxonomy integrity.

* Parent-child relationship rules.

* Impact of restructuring on your hierarchy.

**Contextual Parent Selection**: The system preselects the parent context when you add topics from existing nodes. This streamlines topic creation by automatically setting the appropriate parent category based on where you initiated the action.

**Intelligent Topic Detection**

The system uses custom topic names and detailed descriptions to classify conversations accurately by using large language models (LLMs). When you create a topic, you provide descriptions that help the model identify which customer statements, issues, or requests belong to that topic.

**Topic-Level Resolution (L3 Focus)**

For Level 3 topics, you can enable sophisticated resolution tracking. This level determines whether each customer issue was successfully resolved during the conversation. The system classifies each issue as Successful, Unsuccessful, or Overall Resolutions, with the ability to customize what these outcomes mean for each specific topic type.

### Contact-Level Resolution Methods

The system offers two approaches to determine overall contact resolution:

**Topic-Based Resolution (Strict)**: Mark a contact as resolved only when all L3 topics in the conversation are resolved. This method ensures comprehensive resolution but may mark contacts as unresolved when primary concerns are addressed, but minor issues remain.

**Use This Method When**:

* You must resolve all issues. 

* Require comprehensive resolution of every mentioned issue.

* Quality standards mandate complete issue closure.

* Compliance or regulatory requirements demand full resolution tracking.

**Example**: When a customer calls about a credit card payment issue and mentions a rewards program question. With strict resolution, the system marks the contact as unresolved if you fix the payment but the rewards question remains unanswered.

**Holistic Resolution Assessment**: The LLM evaluates contact resolution independently of individual topics. This method marks a contact as resolved if you address the customer’s primary concerns, even when minor issues remain unresolved. Use this method for a nuanced view of customer satisfaction and agent effectiveness.

**Use This Method When**:

* Prioritize primary contact reasons over secondary ones.

* Measure agent performance based on resolution of the main customer concerns.

* Exclude minor issues or casual mentions from resolution metrics.

**Example**: A customer calls primarily about a payment issue (resolved) but casually mentions a rewards question (unresolved). The system marks the contact as resolved after you handle the primary concern.

Configure your preferred resolution detection method in **Settings** > **Conversation Intelligence**. Align the method with your quality standards and business objectives.

**Hierarchical Sentiment Analysis**

The system captures customer sentiments at the most granular level (L3) and automatically rolls it up through the topic hierarchy. The Topic Discovery dashboard displays sentiment by using color-coded topic bubbles, which let you assess overall health at a glance.

**Green**: Positive sentiment (for example, 10%).

**Grey**: Neutral sentiment (for example, 7%).

**Red**: Poor sentiment (for example, 5%).

**Flexible Organizational Structure**

Not all organizations require a full three-level hierarchy. You can create standalone L2 topics with L3 subtopics when your business does not need an L1 strategic layer. This flexibility helps you align the taxonomy with your actual operational structure.

## System Architecture and Integration

**Version Management**

All taxonomy changes operate through a version control system. Modifications don't impact ongoing analysis until you explicitly create and deploy a new version, preventing accidental disruptions to current operations while giving you complete control over when changes take effect.

**Enterprise-Grade Security and Permissions**

Role-based access controls ensure that:

* Users with full Conversation Intelligence permissions can configure and modify taxonomies.

* View-only users can see configured taxonomies but can't make changes.

* Unauthorized users cannot access the Taxonomy Builder.

* All changes are tracked through comprehensive audit logs and changelogs.

## Strategic Business Impact

When your topic structure aligns with organizational reality, every customer conversation becomes a precise data point for decision-making.

* **Quality Teams**: Deliver targeted coaching based on specific interaction types.

* **Operations Managers**: Identify emerging issues early and respond at the appropriate level of detail.

* **Customer Experience Leaders**: Track sentiment trends at the touchpoints that matter most.

A clear visual hierarchy and performance indicators highlight high and low-performing topics, enabling faster decisions and targeted actions. This makes conversation intelligence an essential tool for driving measurable business outcomes.

To set up and create a taxonomy, refer to [Setup Taxonomy](../taxonomy-builder/setup-taxonomy.md).
