use serde::{Deserialize, Serialize};

use crate::models::{PromptTemplateVariable};

#[derive(Serialize, Deserialize, Debug, Clone, Default)]
pub struct PromptTemplateVersion {
    pub id: String,

    pub template_id: String,

    pub version_label: String,

    pub content: String,

    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub model_hint: Option<String>,

    pub status: String,

    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub variables: Option<Vec<PromptTemplateVariable>>,
}
