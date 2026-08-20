use serde::{Deserialize, Serialize};

use crate::models::{PromptTemplate};

#[derive(Serialize, Deserialize, Debug, Clone, Default)]
pub struct PromptTemplatePage {
    pub items: Vec<PromptTemplate>,

    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub next_cursor: Option<String>,
}
