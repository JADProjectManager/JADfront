export class ProjectRequest {


    private __id: string;
    public get _id(): string {
        return this.__id;
    }

    public set _id(value: string) {
        this.__id = value;
    }
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _unit: string;
    public get unit(): string {
        return this._unit;
    }
    public set unit(value: string) {
        this._unit = value;
    }
    //applicant: UserRO;
    private _functionalManagerName?: string; //If not introduced as User, still we have a name
    public get functionalManagerName(): string {
        return this._functionalManagerName;
    }
    public set functionalManagerName(value: string) {
        this._functionalManagerName = value;
    }
    //functionalManager?: UserRO;
    //sponsor: GroupRO; //To transform to an Schema
    private _need: string;
    public get need(): string {
        return this._need;
    }
    public set need(value: string) {
        this._need = value;
    }

    private _desiredFeatures: string;
    public get desiredFeatures(): string {
        return this._desiredFeatures;
    }
    public set desiredFeatures(value: string) {
        this._desiredFeatures = value;
    }
    private _notDoingConsequences: string;
    public get notDoingConsequences(): string {
        return this._notDoingConsequences;
    }
    public set notDoingConsequences(value: string) {
        this._notDoingConsequences = value;
    }
    private _strategicGoals: string;
    public get strategicGoals(): string {
        return this._strategicGoals;
    }
    public set strategicGoals(value: string) {
        this._strategicGoals = value;
    }
    private _strategicGoalsExplanation: string;
    public get strategicGoalsExplanation(): string {
        return this._strategicGoalsExplanation;
    }
    public set strategicGoalsExplanation(value: string) {
        this._strategicGoalsExplanation = value;
    }
    private _additionalInformation: string;
    public get additionalInformation(): string {
        return this._additionalInformation;
    }
    public set additionalInformation(value: string) {
        this._additionalInformation = value;
    }
    private _affectedDepartments: string;
    public get affectedDepartments(): string {
        return this._affectedDepartments;
    }
    public set affectedDepartments(value: string) {
        this._affectedDepartments = value;
    }
    private _benefitedMemberGroups: string;
    public get benefitedMemberGroups(): string {
        return this._benefitedMemberGroups;
    }
    public set benefitedMemberGroups(value: string) {
        this._benefitedMemberGroups = value;
    }
    private _neededIntegrations: string;
    public get neededIntegrations(): string {
        return this._neededIntegrations;
    }
    public set neededIntegrations(value: string) {
        this._neededIntegrations = value;
    }

    //attachedFiles: [FileUploadRO];
    private _created: Date;
    
    public get created(): Date {
        return this._created;
    }
    public set created(value: Date) {
        this._created = value;
    }
    private _updated: Date;
    
    public get updated(): Date {
        return this._updated;
    }
    public set updated(value: Date) {
        this._updated = value;
    }

    //createdby: UserRO;
    //updatedby: UserRO;


}
