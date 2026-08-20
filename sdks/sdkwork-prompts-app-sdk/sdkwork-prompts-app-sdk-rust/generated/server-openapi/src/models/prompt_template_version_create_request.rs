use serde::{Deserialize, Serialize};

use crate::models::{PromptTemplateVariableInput};

#[derive(Serialize, Deserialize, Debug, Clone, Default)]
pub struct PromptTemplateVersionCreateRequest {
    pub version_label: String,

    pub content: String,

    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub model_hint: Option<String>,

    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub variables: Option<Vec<PromptTemplateVariableInput>>,
}
