use serde::{Deserialize, Serialize};

use crate::models::{PromptTemplateVersion};

#[derive(Serialize, Deserialize, Debug, Clone, Default)]
pub struct PromptTemplateVersionPage {
    pub items: Vec<PromptTemplateVersion>,
}
