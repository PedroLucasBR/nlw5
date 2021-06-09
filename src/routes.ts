import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

const settingsController = new SettingsController;

routes.post("/settings", settingsController.create);

export { routes };



/**
 * Anotações!
 */

/**
 * GET - buscas
 * POST - criação
 * PUT - alteração
 * DELETE - deletar
 * PATCH - alterar informação específica
*/

/**
 * Tipos de Parâmetros
 * Route Params = parâmetros de rota.
 * ex.: http://localhost:3333/settings/1
 * Query Params = filtros e buscas.
 * ex.: http://localhost:3333/settings/1?search=algumacoisa
 * Body Params = corpo do parâmetro (passa objetos dentro das requisições).
 * ex.: {
 *  "chat": "oi"
 *  "username": "pedro"
 * }
 */
